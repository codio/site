/* globals $ */

$(() => {
  // Setup side menu
  setTimeout(() => {
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


/*
function scrollDown () {
  // When clicking a navigation item in the sidebar
  // we want to scroll down immediately

  const $body = $('body')
  const $legalNavigation = $('.legal-header-navigation')

  if (!$body) return

  if ($body.hasClass('legal')) {
    $('body.legal').scrollTop($legalNavigation.offset().top + $legalNavigation.outerHeight())
    $('body.legal.legal_index').scrollTop(0)
  }
}

// Try to do it immediately to avoid a flickr,
// otherwise do it when jquery is ready
scrollDown()

$(() => {
  scrollDown()
  // Setup side menu
  setTimeout(() => {
    const $menu = $('.legal-side-navigation')
    const $legalHeaderNav = $('.legal-header-navigation')
    const $footer = $('footer')
    const $legalBody = $('.legal-body')

    if ($menu.length === 0) return
    // Set a min-height so the full menu is visible
    $legalBody.css({
      'min-height': $menu.outerHeight(true) + $menu.offset().top
    })

    $menu.affix({
      offset: {
        top: function () {
          const c = $menu.offset().top
          const d = parseInt($legalHeaderNav.css('padding-top'), 10)

          this.top = c - d

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
*/
