$(document).ready(function () {
    //console.log("Engine is ready");
   //$.ajax({}); 
   
   // event listener onclick
    $('#process-search').on('click', function () {
       var query = $('#search-query').val();
        var duckDuckGoURL = "https://api.duckduckgo.com" //?=" + searchQuery + "&format=json&pretty=1"


        var queryParameters = {
            q: query,
            format: "json",
            pretty: 1
        };

        //getting results form duckduckgo via ajax

        $.getJSON(duckDuckGoURL, queryParameters, function (searchData) {
            var results = searchData.RelatedTopics; 
            //console.log(results);

            //displaying only result which has matching url and matching text
            results = results.filter(function (value) {
                return value.Text && value.FirstURL;
            });

            var searchResultsElem = $('#search-result-data');

            //emptying the search result at the time of search for different stuff
            searchResultsElem.empty();

            //if no result is found
            if(results.length === 0) {
                var noResult = $('<span/>').text("--No result found--");
                noResult.appendTo(searchResultsElem);

                $(".search-result").show();
                return;
            }

            //displaying result as list with anchor-tag
            results.forEach(function (value, index){
                var liElem = $('<li/>');
                
                var resultPTagElem = $('<p/>').text(value.Text);
                var resultURLElem = $('<span/>').text(value.FirstURL);

                var aTagElem = $('<a/>').attr({
                    href: value.FirstURL,
                    target: "_blank"
                });

                resultPTagElem.appendTo(aTagElem);
                resultURLElem.appendTo(aTagElem);
                aTagElem.appendTo(liElem);

                liElem.appendTo(searchResultsElem);
            });

            //displaying search result heading
            $(".search-result").show();
            
        });
    });
});