/* globals $ */

$(() => {
  // Setup side menue
  setTimeout(() => {
    const menu = $('.docs-menu')
    const docsHeaderNav = $('.docs-header-navigation')
    menu.affix({
      offset: {
        top: function () {
          const c = menu.offset().top
          const d = parseInt(docsHeaderNav.css('padding-top'), 10)

          this.top = c - d

          return this.top
        },
        bottom: function () {
          this.bottom = $('footer').outerHeight(true)
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
