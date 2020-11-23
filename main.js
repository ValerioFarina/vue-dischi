var app = new Vue({
    el: '#root',

    data: {
        albums : [],
        genres : [],
        selectedGenre : 'All',
        order : 'asc'
    },

    methods: {
        // this function sorts the array of albums according to the value of "order"
        sortAlbums() {
            if (this.order == 'asc') {
                // if order is equal to "asc"
                // then the array is sorted from the oldest album to the newest
                this.albums.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            } else if (this.order == 'desc') {
                // if order is equal to "desc"
                // then the array is sorted from the newest album to the oldest
                this.albums.sort((a, b) => parseInt(b.year) - parseInt(a.year));
            }
        }
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
                // we sort the array of albums from the oldest album to the newest
                this.sortAlbums();
            });
    }
});
