window.onload = function() {
    // Login\Logout
    AuthorizationModule.check();
    AuthorizationModule.close();
    AuthorizationModule.show();
    AuthorizationModule.auth();
    AuthorizationModule.logout();
    // Tab Changer
    TabsModule.switchTabs();
    // Name Changer
    NameChangerModule.changeName();
}