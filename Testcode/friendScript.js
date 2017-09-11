var extraPerson1 = new person("Bob", "Test", 25, "male");
var extraPerson2 = new person("Andy", "Test", 25, "male");
var extraPerson3 = new person("Jason", "Test", 25, "male");

var demo = new Vue({
    el: '#addFriendsWindow',
    data: {
        searchString: "",

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.

        articles: [
            extraPerson1, extraPerson2, extraPerson3
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.firstName.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;;
        }
    }
});