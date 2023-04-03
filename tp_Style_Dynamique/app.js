const app = Vue.createApp({
    data() {
        return {
            input1: '',
            input2: '',
            classe1: '',
            couleur: ''
        }
    },
    watch: {
        input1(value) {
            if (value === 'hello') {
                this.classe1 = 'maClasseHello';
            } else if (value === 'world') {
                this.classe1 = 'maClasseWorld';
            } else {
                this.classe1 = '';
            }
        },
        input2(value) {
            this.couleur = value;
        }
    }
});

app.mount('#monApp');
