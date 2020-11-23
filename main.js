var app = new Vue({
    el: '#root',

    data: {
        albums : [],
        genres : []
    },

    methods: {

    },

    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((responseObject) => {
                // we get from the API the array of albums
                this.albums = responseObject.data.response;
                // then, we get all the different genres of the albums
                this.albums.forEach((album) => {
                    if (!this.genres.includes(album.genre)) {
                        this.genres.push(album.genre);
                    }
                });
                console.log(this.genres);

            });
    }
});
