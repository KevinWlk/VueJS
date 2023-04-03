Vue.createApp({
	data() {
		return {
			count: 0
		}
	},
	methods: {
		ajouter() {
			this.count++;
		},
		soustraire() {
				this.count--;
		}
	}
}).mount('#monApp');
