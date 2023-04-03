Vue.createApp({
	data() {
		return {
			count: 0
		}
	},
	methods: {
		plusCinq() {
			this.count+=5;
		},
		plusUn() {
				this.count++
		},
        mystery(){
            if (this.count <7){
                return "Essaie encore"
            } else if(this.count ===7){
                return "Bingo!"
            } else {
                return "Tu as dépassé!"
            }
	    },
    },
    watch:{
        count(value) {
        if(value>30){
            this.count = 0
        }
        },
    },
}).mount('#monApp');
