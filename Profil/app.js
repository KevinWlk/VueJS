Vue.createApp({

    data() {
        return {
            user: {
                image: 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
                name: 'John Doe',
                age: 45
            },
            randomNumber: Math.round(Math.random()*100),
            inputValue: 'John Doe'
        };
    },

    methods: {
        agePlusDix() {
            return this.user.age + 10;
        }
    },

}).mount('#app');
