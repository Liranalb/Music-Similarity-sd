

(function ($) {
    $(document).ready(function () {
        //let researchId = $('#researchId').val;
        researchId = 3;
        function initResearchData() {
            getResearchData().then(function (researchData) {
                const playlistsKeys = {
                    arame: "ArabicME",
                    arana: "ArabicNA",
                    heb: "Hebrew",
                    fra: "French",
                    spa: "Spanish",
                    rus: "Russian",
                    eng: "English",
                    Eng: "English",
                    yid: "Yiddish",
                    lad: "Ladino",
                    ara: "Arabic",
                    pra: "Prayer Songs (Piyutim)",
                    mid: "Middle Eastern music",
                    cla: "Classical/Traditional"
                };

                $("#numberOfSongs").html(researchData.numberOfSongs.toString());
                $("#numberOfRatedSongs").html(researchData.NumberOfRatedSongs.toString());
                //$("#numberOfPlaylists").html(researchData.numberOfPlaylistsNum.toString());
                //$("#mostRatedSong").html(researchData.songsSortedByAvg[0][0]);
                //$("#lowestRatedSong").html(researchData.songsSortedByAvg[songsSortedByAvg.length-1][0]);

                let pieChart = document.getElementById("pie-chart").getContext("2d");

                new Chart(pieChart, {
                    type: 'pie',
                    data: {
                        labels: researchData.pieLables,
                        datasets: [{
                            label: "Languages",
                            display: true,
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#4ab5b6", "#158a7d"],
                            data: researchData.pieData
                        }]
                    },
                    options: {
                        responsive:false,
                        title: {
                            display: true,
                            text: 'songs'
                        },
                        hoverBorderColor: "black"
                    }

                });

                console.log(researchData);
                // 2. NumberOfPlaylists = count the number of playlists
                // 3. NumberOfLikedSongs = count the number of songs with score >= 4
                // 4. DislikedSongs = count the number of songs with score <=3
                // 5. mostRatedPlaylist = the playlist with most rated songs
                // 6. for each user - get the disliked songs and the liked songs

                    //set html general research data




            }).catch(function (err) {
                console.log(err);
                return err;
            });
        }
        initResearchData();
        function getResearchData() {
            return new Promise(function (resolve, reject) {
                $.post('researchPortalData/'+ researchId, function (data) {
                    if (!data || !data.items) return reject(Error("ERROR IN FIND LIST"));
                    resolve(data.items);
                })
            });
        }



        $('#send').on("click", async function (e) {
            initResearchData();
            });



        var sessionMenuItem = '<div class="rsStyle-bar-block" id=\'sessionMenuItem\'>';
        sessionMenuItem += '<a href="#" className="rsStyle-bar-item rsStyle-button rsStyle-padding rsStyle-grad-menu"><i className="fa fa-bullseye fa-fw"></i>::SESSIONMENUITEM::</a>';
        sessionMenuItem += '</div>';
    });

})(jQuery);


// add async supoprt for ajax calls
function ajaxAwait(resourceUrl, method, playlistData){
    return  new Promise(function (resolve, reject) {
        $[method](resourceUrl ,{ playlistData,
        }).done(function (data) {
            if (data.err){
                reject(data);
            }
            else {
                resolve(data);
            }
        });
    });
}