
$(() => {

  const $menu = $('.docs-side-navigation')
  const $docsBody = $('.docs-body')

  if ($menu.length === 0) return

  $menu.css({
    'min-height': $menu.outerHeight(true)
  })

  // Set a min-height so the full menu is visible
  $docsBody.css({
    'min-height': $menu.outerHeight(true)
  })



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
