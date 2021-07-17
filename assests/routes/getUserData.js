

(function ($) {
    $(document).ready(function () {
        const SONGSDISPLAYED = 10;
        var musicWrapper = $('#musicWrapper');
        /**
         *  @NAME template,experienceShow: add the video and the vote buttons to screen (HTML)
         *
         *
         */
        var template = '<div class="wrap-input100 input100-select">';
        template += '<span id="::videoId:::" class="label-input100"></span>';
        template += '<div id="demo"></div>';

        template += '<span class="focus-input100">::name::</span>';
        template += '<iframe width="1024" height="600" src="http://www.youtube.com/embed/::link::"></iframe>';
        template += '<div id = "buttons" style="text-align:center;">';
        template += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',\'::playListName::\',1)" name="Angry" id ="like" ><p style="font-size:100px" name="like" title="Angry">😠</p></button>';
        template += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',\'::playListName::\',2)" name="Sad" id ="like"><p style="font-size:100px" name="like" title="Sad" >🙁</p></button>';
        template += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',\'::playListName::\',3)" name="Indifferent" id ="like"><p style="font-size:100px" name="like" title="Indifferent" >😐</p></button>';
        template += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',\'::playListName::\',4)" name="Relaxed" id ="like"><p style="font-size:100px" name="like" title="Relaxed" >🙂</p></button>';
        template += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',\'::playListName::\',5)" name="Joyful" id ="like"><p style="font-size:100px" name="like" title="Joyful" >😀</p></button>';
        template += '';
        template += '</div>';
        template += '</div>';


        var experienceShow = '<div class="wrap-input100 input100-select" >';
        experienceShow += '<span id="::videoId:::" class="label-input100"></span>';
        experienceShow += '<div id="demo" style="width: 600px"></div>';
        experienceShow += '<span class="focus-input100">::name::</span>';
        experienceShow += '<iframe width="1000" height="1000" src="http://www.youtube.com/embed/::link::"></iframe>';
        experienceShow += '<div id = "buttons">';
        experienceShow += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',1)" name="Angry" id ="like"><img  src="../images/btn/Angry.png" name="like" title="Angry" /></button>';
        experienceShow += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',2)" name="Sad" id ="like"><img src="../images/btn/Sad.png" name="like" title="Sad" /></button>';
        experienceShow += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',3)" name="Indifferent" id ="like"><img src="../images/btn/Indifferent.png" name="like" title="Indifferent" /></button>';
        experienceShow += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',4)" name="Relaxed" id ="like"><img src="../images/btn/Relaxed.png" name="like" title="Relaxed" /></button>';
        experienceShow += '<button class="buttonDes" type="button" onclick="f2(\'::userid::\',\'::data::\',5)" Joyful="like" id ="like"><img src="../images/btn/Joyful.png" name="like" title="Joyful" /></button>';
        experienceShow += '';
        experienceShow += '</div>';
        experienceShow += '</div>';

        let commentStart = '<div class="wrap-input100 validate-input">';
        commentStart += '<textarea id=\'startString\' class="input100" style="text-align:right" name="Text1" cols="40" rows="2" placeholder="מדריך\\מדריכה, אנא מלאו מצב בתחילת המפגש"></textarea>'
        commentStart += '</div>';
        commentStart += '<div class="container-contact100-form-btn">';
        commentStart += '<div class="wrap-contact100-form-btn">';
        commentStart += '<div class="contact100-form-bgbtn"></div>';
        commentStart += '<button type="button" id=\'startComment\' onclick="postComment(\'::userid::\',\'start\')" class="contact100-form-btn">';
        commentStart += '<span>';
        commentStart += 'שמור';
        commentStart += '</span>';
        commentStart += '</button>';
        commentStart += '</div>';
        commentStart += '&nbsp;&nbsp;';
        commentStart += '</div>';

        let commentEnd = '<div class="wrap-input100 validate-input">';
        commentEnd += '<textarea id=\'endString\' class="input100" style="text-align:right" name=\'sessionComment\' cols="40" rows="2" placeholder="מדריך\\מדריכה, אנא מלאו מצב בסוף המפגש"></textarea>'
        commentEnd += '</div>';
        commentEnd += '<div class="container-contact100-form-btn">';
        commentEnd += '<div class="wrap-contact100-form-btn">';
        commentEnd += '<div class="contact100-form-bgbtn"></div>';
        commentEnd += '<button type="button" id=\'endComment\' onclick="postComment(\'::userid::\',\'end\')" class="contact100-form-btn">';
        commentEnd += '<span>';
        commentEnd += 'שמור';
        commentEnd += '</span>';
        commentEnd += '</button>';
        commentEnd += '</div>';
        commentEnd += '&nbsp;&nbsp;';
        commentEnd += '</div>';

        // onclick="location.href='researches'
        $('#login').on("click", function (e) {
            console.log("LOG - IN Pressed");
            if ($('#userName').val().length === 0 || $('#password').val().length === 0)         // use this if you are using id to check
            {
                alert("Insert id and password!");
                return $('#error').text("insert id and password!");
            } else {
                var userName = $('#userName');
                var password = $('#password');
            }

            var userData = {
                userName: userName.val(),
                userPassword: password.val(),
            };

            var loginUserPath = '/loginUser';
            // console.log(researcherData);
            var postingInsertResearch = $.post(loginUserPath, userData);
            postingInsertResearch
            .fail(function(data){
                if(data.responseJSON && data.responseJSON.message)
                    alert(data.responseJSON.message);
            })
            .done(function (data) {

                var user = data.items[0];
                //console.log("user",user)
                if(!user.playlists || !user.playlists.length) return alert("No playlist was defined for this user!");

                var html = '';
                html += commentStart.replace(new RegExp('::userid::', 'g'), user.tamaringaId.toString())

                user.playlists.forEach(playlist => {
                    playlist[0].records.forEach(plRecord => {
                    const record = plRecord;
                    const mbid = record.mbId ? record.mbId : '';
                    const cleanMbid = mbid.replace(/([\/,"+'!?_])/g, "\\$1");
                    const videoId = (record.youtube && record.youtube.videoId) ? record.youtube.videoId : '';
                    const title = (record.title) ? record.title : '';
                    const artist = (record.artistName) ? record.artistName : '';
                    const playlistName = record.playlistName;
                    html += template
                        .replace(new RegExp('::videoId::', 'g'), videoId)
                        .replace(new RegExp('::name::', 'g'), title + ' - ' + artist)
                        .replace(new RegExp('::link::', 'g'), videoId)
                        .replace(new RegExp('::userid::', 'g'), user.tamaringaId.toString())
                        .replace(new RegExp('::data::', 'g'), cleanMbid)
                        .replace(new RegExp('::playListName::', 'g'), playlistName);

                    html = html
                        .replace(new RegExp('::userid::', 'g'), user.tamaringaId.toString())
                        .replace(new RegExp('::data::', 'g'), mbid);
                    })
                });

                html += commentEnd.replace(new RegExp('::userid::', 'g'), user.tamaringaId.toString());

                let today = new Date();
                const dd = String(today.getDate()).padStart(2, '0');
                const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy = today.getFullYear();

                today = dd + '/' + mm + '/' + yyyy;

                $('#title').html(today + " ," + (data.items[0].entrance +1) + " :מפגש" +  "  !" + data.items[0].data.firstName.toString()  + " " + data.items[0].data.lastName +" שלום");
                window.scrollBy(0, 500);
                musicWrapper.html(html);});
        });


    });
})(jQuery);

/** ----------------------------------------------------------------------------------
 * Post entrance comment and end of session comment
 *
 * @PARAM {String*} id: Given user id
 * @PARAM {String} comment: Given song mbid
 * @PARAM {String} type: user or guide rating
 * @RESPONSE {json}
 * @RESPONSE-SAMPLE {userData}
 ---------------------------------------------------------------------------------- */


function postComment(id, type) {
        let comment = "";
        if(type === "start"){
            comment += document.getElementById("startString").value;
        }
        else if(type === "end"){
            comment += document.getElementById("endString").value;
        }
    //alert("comment is: " + comment + " type: " + type);
    let req =  $.post('sessionComments/'+id, {type, comment});

    req.done(function(){
        alert('התגובה נשמרה בהצלחה!');
    })
}


/** ----------------------------------------------------------------------------------
 * Update or Add the vote number.
 *
 * @PARAM {String*} id: Given user id
 * @PARAM {String} mbid: Given song mbid
 * @PARAM {Number} playlistName: The song playlist
 * @PARAM {String} rateType: user or guide rating
 * @PARAM {Number} score: vote number

 *
 * @RESPONSE {json}
 * @RESPONSE-SAMPLE {playList , userData}
 ---------------------------------------------------------------------------------- */


function f2(id, mbId, playlistName, score) {
    const rateType = "user";
    let req =  $.post('selection/'+id, {mbId, playlistName, score, rateType});

    req.done(function(){
        alert('Thanks we recived your score')
    })
}

/** ----------------------------------------------------------------------------------
 * Update the entrance times .
 *
 * @PARAM {String*} id: Given user id
 * @PARAM {String} entrance: entrance number.
 *
 * @RESPONSE {json}
 * @RESPONSE-SAMPLE {playList , userData}
 ---------------------------------------------------------------------------------- */
function addEntrance(id, entrance) {

    $.get('/user/' + id, function (data) {

        var enter = entrance;

        if (data.items[0].songs.length == 0) {
            enter = 0;
        }
        if (!data.items) {
            return Error;
        }
        var obj = {
            tamaringaId: id.toString(),
            entrance: enter
        };
        var $form = $(this);
        // //console.log($form);
        var url = $form.attr("action");
        url = "users/" + id.toString();
        var posting = $.post(url, obj);
        //console.log("url: "+url);
        // alert("vote add");
        posting.done(function (data) {
            //     //console.log("data:"+data);
        });
    });
}
