var app = new Vue({
    el: '#root',

    data: {
        albums : []
    },

    methods: {

    },

    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((responseObject) => {
                this.albums = responseObject.data.response;
            });
    }
});
