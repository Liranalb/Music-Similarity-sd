(function ($) {
    $(document).ready(function () {
        // console.log("here");
        $('#send').on("click", function (e) {
            let newData = ['#name','#password','#id','#department','#medicalProfile','#countryAtTwenty','#countryOrigin', '#age','#languageOrigin','#firstLangAtTwenty','#secondLangAtTwenty','#yearOfImmigration','#Genre1Select','#Genre2Select','#nursingHome'];
            let inputsArr = ['#birthYear', '#userName', '#firstName', '#lastName', '#id', '#nursingHome', '#countryAtTwenty','#countryOrigin', '#languageOrigin', '#firstLangAtTwenty','#secondLangAtTwenty'];

            for (const element of inputsArr) {
                console.log("element", element)
                // console.log("element length", $(element).val().length)
                if ($(element).val().length <= 1) {
                    var element2 = element.substr(1);
                    alert("Please fill the missing details in " + element2);
                    return $('#error').text("insert all the details");
                }
            }



            
            //the new user data
            var userName = $('#userName'),
                firstName = $('#firstName'),
                lastName = $('#lastName'),
                id = $('#id'),
                password = $('#password'),
                nursingHome = $('#nursingHome'),
                department = $('#department'),
                medicalProfile = $('#medicalProfile'),
                birthYear = $('#birthYear'),
                countryOrigin = $('#countryOrigin'),
                countryAtTwenty = $('#countryAtTwenty'),
                languageOrigin = $('#languageOrigin'),
                firstLangAtTwenty = $('#firstLangAtTwenty'),
				secondLangAtTwenty = $('#secondLangAtTwenty'),
                yearOfImmigration = $('#yearOfImmigration'),
                Genre1Select = $('#Genre1Select'),
                Genre2Select = $('#Genre2Select');

            var yearTwenty = parseInt(birthYear.val()) + 20;
            // var yearTwenty = (new Date()).getFullYear() - parseInt(age.val()) + 20;
            if (!yearTwenty) {
                $('#error').text("the year not calculate");
                return;
            }
            var recList = [];
            var prom = new Promise(function (resolve, reject) {
                let publicId = 0;
                $.get('/publicId/'+ id.val().toString(), function (data) {

                }).then(function (response) {
                    publicId = response.items[0];
                    var privateUser= {
                        firstName: firstName.val(),
                        lastName: lastName.val(),
                        userName: userName.val(),
                        tamaringaId: publicId.toString(),
                        privateId: id.val().toString(),
                        nursingHome: nursingHome.val(),
                    };


                    // var encryptedPass = CryptoJS.AES.encrypt(password.val(),'Password');


                    var publicUser = {
                        firstName: firstName.val(),
                        lastName: lastName.val(),
                        userName: userName.val(),
                        tamaringaId: publicId.toString(),
                        password : password.val(),
                        department: department.val(),
                        medicalProfile : medicalProfile.val(),
                        birthYear : parseInt(birthYear.val()),
                        yearAtTwenty: yearTwenty,
                        languageOrigin : languageOrigin.val(),
                        firstLangAtTwenty : firstLangAtTwenty.val(),
						secondLangAtTwenty : secondLangAtTwenty.val(),
                        countryAtTwenty: countryAtTwenty.val(),
                        countryOrigin: countryOrigin.val(),
                        yearOfImmigration : parseInt(yearOfImmigration.val()),
                        Genre1Select : Genre1Select.val(),
                        Genre2Select : Genre2Select.val(),
                        nursingHome : nursingHome.val(),
                        group: countryAtTwenty.val() + firstLangAtTwenty.val() +yearTwenty.toString(),
                        entrance: 0,
                        songs: JSON.stringify(recList)
                    };

                    let playlistArr = []
                    console.log(Genre1Select.val())
                    console.log(Genre2Select.val())
                    if (Genre1Select.val() != "None"){
                        playlistArr.push(Genre1Select.val());
                    }
                    if (Genre2Select.val() != "None"){
                        playlistArr.push(Genre2Select.val());
                    }

                    console.log("playlistArr: ",playlistArr);

                    var userData= {
                        firstName: firstName.val(),
                        lastName: lastName.val(),
                        userName: userName.val(),
                        tamaringaId: publicId.toString(),
                        playlists: [firstLangAtTwenty.val(), secondLangAtTwenty.val()],
                        genrePlaylists: playlistArr,
                        researchList: []
                    };

                    //userData
                    var userDataUrl = '/insertUserData';
                    var postingUserData = $.post(userDataUrl, userData).then(function (data) {
                         console.log("userData:",data);
                    });
                    postingUserData.done(function (data) {
                    });


                    //private users
                    var privateUrl = '/insertPrivateUsers';
                    var postingPrivate = $.post(privateUrl, privateUser).then(function (data) {
                        console.log("private user data:",data);
                    });
                    postingPrivate.done(function (data) {
                    });
                    //public users
                    var publicUrl = '/insertPublicUsers';
                    var postingPublic = $.post(publicUrl, publicUser);
                    postingPublic.done(function (data) {
                        console.log("public User data:",data);
                    });
                    alert("The User Created \n The User Name is:" + publicUser.userName);
                    // var pathname = "/adminMainPage"
                    // window.location.replace(pathname);
                })
            });
        })
    });
})(jQuery);


// DEFINE RETURN VALUES


// function ValidateID(str)
// {
//     //INPUT VALIDATION
//     var R_ELEGAL_INPUT = -1;
//     var R_NOT_VALID = -2;
//     var R_VALID = 1;
//     // Just in case -> convert to string
//     var IDnum = String(str);
//
//     // Validate correct input
//     if ((IDnum.length > 9) || (IDnum.length < 5))
//         return R_ELEGAL_INPUT;
//     if (isNaN(IDnum))
//         return R_ELEGAL_INPUT;
//
//     // The number is too short - add leading 0000
//     if (IDnum.length < 9)
//     {
//         while(IDnum.length < 9)
//         {
//             IDnum = '0' + IDnum;
//         }
//     }
//
//     // CHECK THE ID NUMBER
//     var mone = 0, incNum;
//     for (var i=0; i < 9; i++)
//     {
//         incNum = Number(IDnum.charAt(i));
//         incNum *= (i%2)+1;
//         if (incNum > 9)
//             incNum -= 9;
//         mone += incNum;
//     }
//     if (mone%10 == 0)
//         return R_VALID;
//     else
//         return R_NOT_VALID;
// }
