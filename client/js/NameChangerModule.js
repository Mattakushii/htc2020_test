const NameChangerModule = (function() {
    const userName = $('#user_name');
    const inputUserName = $('#user_name_change');

    function changeName() {
        $(inputUserName).hide();
        $(userName).on('click', function() {
            $(this).hide();
            $(inputUserName).show().focus();
            let fName = localStorage.getItem('fName');
            let lName = localStorage.getItem('lName');
            $(inputUserName).val(fName + " " + lName);
            $(inputUserName).on('blur', function(e) {
                const userData = $(this).val().split(' ');
                localStorage.setItem('fName', userData[0]);
                localStorage.setItem('lName', userData[1]);
                pasteName();
            })
        })
    }

    function pasteName() {
        $(userName).text(localStorage.getItem('fName') + " " + localStorage.getItem('lName').substring(0,1)+".");
        $(userName).show();
        $(inputUserName).hide();
    }

    return{
        changeName: changeName,
        pasteName: pasteName
    }
})();