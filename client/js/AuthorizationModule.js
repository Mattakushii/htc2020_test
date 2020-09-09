const AuthorizationModule = (function() {
    
    //important variables
    const loginButton  = $('#login_button');
    const logoutButton = $('#logout_button');
    const userProfile  = $('.user_profile');
    const errorMessage = $('#error_message');
    const authForm     = document.forms.auth;
    const popupAuth    = $('#popup');
    const closePopup   = $('#close');

    let user = {
        login: 'htc2020',
        password: '123',
    }

    const showLoginScreen = function() {
        $(loginButton).on('click', function() {
            $(popupAuth).show();
        })
    }

    const authorization = function() {
        $(authForm).on('submit', function(e) {
            if(user.login === authForm.login.value && user.password === authForm.password.value) {
                localStorage.setItem('fName', 'Безымянный');
                localStorage.setItem('lName', 'Васильевич');
            } else {
                authForm.password.value = '';
                $(errorMessage).text('Неверный логин или пароль. Попробуйте снова')
                setTimeout( function() {
                    $(errorMessage).text('')
                }, 2000);
                e.preventDefault()
            }
        })
    }

    const logout = function() {
        $(logoutButton).on('click', function() {
            localStorage.clear();
            checkUser();
        })
    }

    const checkUser = function() {
        if(localStorage.getItem('fName') && localStorage.getItem('lName')) {
            $(userProfile).removeClass('isVisible');
            $(loginButton).addClass('isVisible');
            NameChangerModule.pasteName();
        } else {
            $(loginButton).removeClass('isVisible');
            $(userProfile).addClass('isVisible');
        }

    }

    const closeAuthScreen = function() {
        $(closePopup).on('click', function() {
            $(popupAuth).hide();
        })
    }


    return {
        show: showLoginScreen,
        close: closeAuthScreen,
        auth: authorization,
        check: checkUser,
        logout: logout,
    }

})();