/* globals $ */

function scrollDown () {
  // When clicking a navigation item in the sidebar
  // we want to scroll down immediately

  const $body = $('body')
  const $docsNavigation = $('.docs-header-navigation')

  if (!$body) return

  if ($body.hasClass('docs')) {
    $('body.docs').scrollTop($docsNavigation.offset().top + $docsNavigation.outerHeight())
    $('body.docs.docs_index').scrollTop(0)
  }
}

// Try to do it immediately to avoid a flickr,
// otherwise do it when jquery is ready
scrollDown()

$(() => {
  scrollDown()
  // Setup side menu
  setTimeout(() => {
    const $menu = $('.docs-side-navigation')
    const $docsHeaderNav = $('.docs-header-navigation')
    const $footer = $('footer')
    const $docsBody = $('.docs-body')

    if ($menu.length === 0) return
    // Set a min-height so the full menu is visible
    $docsBody.css({
      'min-height': $menu.outerHeight(true) + $menu.offset().top
    })

    $menu.affix({
      offset: {
        top: function () {
          const c = $menu.offset().top
          const d = parseInt($docsHeaderNav.css('padding-top'), 10)

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

  // Setup search
  $('#st-search-input').swiftypeSearch({
    resultContainingElement: '#st-results-container',
    engineKey: '9ss2uGXz9XP6kyd6y6CN',
    perPage: 10,
    fetchFields: {page: ['title', 'body', 'url']},
    searchFields: {page: ['title', 'body']},
    preRenderFunction () {
      $('.docs-header-navigation-container').hide()
    },
    renderFunction (document_type, item) {
      const title = item.highlight.title || item.title
      const body = item.highlight.body || item.body
      return '<div class="st-result">' +
        '<h4 class="title">' +
        `<a href="${item.url}" class="st-search-result-link">${title}</a>` +
        '</h4>' +
        '<p class="body">' +
        body +
        '</p>' +
        '</div>'
    }
  })
})
