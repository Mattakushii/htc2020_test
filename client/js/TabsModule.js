const TabsModule = (function(options) {

    //important variables
    let tabs = $('.tab_changer_item'); //tabs array
    let pages = $('.pages');           //pages array
    let activeTabsClass = 'tab_changer_item_active';

   const switchTabs = function() {
    $(pages).hide();
    $(tabs[0]).addClass(activeTabsClass);
    $(pages[0]).show();
    
    $(tabs).on('click', function() {
        let index = $(this).index();
        if(!(this.classList.contains(activeTabsClass))) {
            $.each(pages, function() {
                pages.hide();
                tabs.removeClass(activeTabsClass)
            });
            $(this).addClass(activeTabsClass);
            $(pages[index]).show();
        }
    });
   }

   return {
        switchTabs: switchTabs,
   }

})();