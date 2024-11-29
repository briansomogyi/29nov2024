Vue.createApp({
    data() {
        return {
            david: "David",
            plants: [
                { height: 1, id: 0 },
                { height: 1, id: 1 },
                { height: 1, id: 2 },
                { height: 1, id: 3 },
            ],
        };
    },
    methods: {
        water: function (plantId) {
            if (this.plants[plantId].height >= 4) this.plants[plantId].height += 4;
            else this.plants[plantId].height++;
        },
    },
    watch: {},
    computed: {},
}).mount("#app");