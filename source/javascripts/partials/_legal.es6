/* globals $ */

$(() => {
  // Setup side menu
  setTimeout(() => {
    if (document.documentElement.clientWidth <= 800) {
      return;
    }

    const $menu = $('.legal-side-navigation')
    const $footer = $('footer')

    $menu.affix({
      offset: {
        top: function () {
          const c = $menu.offset().top
          this.top = c

          return this.top
        },
        bottom: function () {
          this.bottom = $footer.outerHeight(true) + 100
          return this.bottom
        }
      }
    })
  }, 100)
})
