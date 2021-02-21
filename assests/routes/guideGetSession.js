(function ($) {
    $(document).ready(function () {
        let titleBlock = '';
        let songBlocks = '';
        let body = '';
        let footerBlock = '';
        let curSession = '';

        let title = '<span class="contact100-form-title" >';
        title += 'Session Playlist';
        title += '</span>';
        title += '<span style="background:lightgray; font-size: 150%; text-align: center;"\n' + 'class="wrap-contact100-form-btn"><b>Name: ';
        let endTitle = '</b></br><b>Session: </b>';

        let songBlock = '<div class="container-section-space">';
        songBlock += '<div class="container-section">';
        songBlock += '<div>';
        songBlock += '<span style=" text-align: center" class="class=label-input100"><b>Artist Name - Song name</b></br></span>';
        songBlock += '<span class="class=label-input100">Rate song:</br></span>';
        songBlock += '<button style="font-size: 115%; text-align: center;" class="buttonDes" type="button" onclick="" name="verySad" id ="verySad">😟</button>';
        songBlock += '<button style="font-size: 115%; text-align: center;" class="buttonDes" type="button" onclick="" name="Sad" id ="Sad">🙁</button>';
        songBlock += '<button style="font-size: 115%; text-align: center;" class="buttonDes" type="button" onclick="" name="Indifferent" id ="Indifferent">😐</button>';
        songBlock += '<button style="font-size: 115%; text-align: center;" class="buttonDes" type="button" onclick="" name="happy" id ="happy">😀</button>';
        songBlock += '<button style="font-size: 115%; text-align: center;" class="buttonDes" type="button" onclick="" name="Joyful" id ="Joyful">😆</button>';
        songBlock += '</div>';
        songBlock += '<div class="wrap-input100 validate-input" data-validate="Name is required">';
        songBlock += '<input id=\'songComment\' class="input100" type="text" name=\'songComment\' placeholder="Song comment">';
        songBlock += '</div>';
        songBlock += '<div class="container-contact100-form-btn">';
        songBlock += '<div class="wrap-contact100-form-btn">';
        songBlock += '<div class="contact100-form-bgbtn"></div>';
        songBlock += '<button type="button" id=\'send\' class="contact100-form-btn">';
        songBlock += '<span>';
        songBlock += 'Save';
        songBlock += '<i class="fa m-l-7" aria-hidden="true"></i>';
        songBlock += '</span>';
        songBlock += '</button>';
        songBlock += '</div>';
        songBlock += '</div>';
        songBlock += '</div>';
        songBlock += '</div>';

        // FOR GENERAL SESSION RATING AT THE END TOF THE SESSION
        let footer = '<div class="container-section-space">';
        footer += '<div class="container-section">';
        footer += '<div align="center" style="background:lightgray; font-size: 150%; text-align: center;" class="wrap-contact100-form-btn">';
        footer += '<span style=" text-align: center" class="class=label-input100"><b>General Session Rating</b></br></span>';
        footer += '<button style="font-size: 200%; text-align: center;" class="buttonDes" type="button" onclick="" name="verySad" id ="verySadGen">😟</button>';
        footer += '<button style="font-size: 200%; text-align: center;" class="buttonDes" type="button" onclick="" name="Sad" id ="SadGen">🙁</button>';
        footer += '<button style="font-size: 200%; text-align: center;" class="buttonDes" type="button" onclick="" name="like" id ="IndifferentGen">😐</button>';
        footer += '<button style="font-size: 200%; text-align: center;" class="buttonDes" type="button" onclick="" name="happy" id ="happyGen">😀</button>';
        footer += '<button style="font-size: 200%; text-align: center;" class="buttonDes" type="button" onclick="" name="Joyful" id ="JoyfulGen">😆</button>';
        footer += '</div>';
        footer += '</br>';
        footer += '<div class="wrap-input100 validate-input" data-validate="Name is required">';
        footer += '<input id=\'songComment3\' class="input100" type="text" name=\'sessionComment\' placeholder="Session comment">';
        footer += '</div>';
        footer += '<div class="container-contact100-form-btn">';
        footer += '<div class="wrap-contact100-form-btn">';
        footer += '<div class="contact100-form-bgbtn"></div>';
        footer += '<button type="button" id=\'send3\' class="contact100-form-btn">';
        footer += '<span>';
        footer += 'Save';
        footer += '</span>';
        footer += '</button>';
        footer += '</div>';
        footer += '</div>';
        footer += '</div>';
        footer += '</div>';
        footer += '<div class="container-contact100-back-btn">';
        footer += '<div class="wrap-contact100-back-btn">';
        footer += '<div class="contact100-back-bgbtn"></div>';
        footer += '<button id=\'main\' type=\'button\' class="contact100-back-btn" onclick="location.href=\'/guideMainPage\'">';
        footer += '<i class="fa fa-arrow-left m-l-7" aria-hidden="true"></i>';
        footer += '</button>';
        footer += '</div>';
        footer += '</div>';

        $('#enterSession').on("click", function (e) {
            console.log('hello from guideGetSession.js! ');
            console.log('selected data is: ' + selectedData[0].firstName);
            $('#guideTitle').remove(); //remove user and session selection before injecting
            $('#mainDiv').remove();

            //inject header
            $('#selectedSession').html(title
                + '\xa0' + selectedData[0].firstName
                + endTitle + sessionDate + '</span>'
                + footer

        );


        });

        //curSession += titleBlock += songBlocks += body += footerBlock;
        //console.log("current session: " + curSession);
        //injection function here...

    });
})(jQuery);

