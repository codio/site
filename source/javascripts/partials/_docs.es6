/* globals $ */

$(() => {
  setTimeout(() => {
    const menu = $('.docs-menu')
    const docsHeaderNav = $('.docs-header-navigation')
    menu.affix({
      offset: {
        top: function () {
          const c = menu.offset().top
          const d = parseInt(docsHeaderNav.css('padding-bottom'), 10)
          const e = parseInt(docsHeaderNav.css('margin-bottom'), 10)
          this.top = c + d + e

          return this.top
        },
        bottom: function () {
          this.bottom = $('footer').outerHeight(true)
          return this.bottom
        }
      }
    })
  }, 100)
})
