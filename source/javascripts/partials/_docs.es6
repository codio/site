function getMinSearchHeight(searchHeight) {
  return ($('.overview-section').height() < 300) ? 300 : $('.overview-section').height() + 300;
}

$(document).ready(function() {
  const $menu = $('.docs-side-navigation')
  const $docsBody = $('.docs-body')

  if ($menu.length === 0) return
  
  $menu.css({
    'min-height': $menu.outerHeight(true)
  })

  setTimeout(() => {
    const $menu = $('.docs-side-navigation')
    const $footer = $('footer')
    const $header = $('header.fixed')
    const $searchResults = $('.overview-section')
    const $window = $(window)

    if ($menu.length === 0) return
    
    $menu.each(function () {
      var $self = $(this);
      var offsetFn = function () {
        var $p = $self.closest('.sec');
        var $$ = $p.prevAll('.sec');
        const c = $menu.offset().top;
        const h = $header.height();
        var top = 0;
        if ($window.scrollTop() < getMinSearchHeight($searchResults.height())) top = c - h;
        $$.each(function () { top += $(this).outerHeight(); });
        return top;
      }
      $self.affix({
        offset: {
          top: offsetFn,
          bottom : function () {
            this.bottom = $footer.outerHeight(true) + 100
            return this.bottom
          }
        }
      });
    });
  }, 100)

  // Set a min-height so the full menu is visible
  $docsBody.css({
    'min-height': $menu.outerHeight(true)
  })
})

$(document).ready(function () {
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

$(document).ready(function() {
  var elements = $('aside .active');
  if (elements.length > 2) {
    elements.last().addClass('item-selected');
  } else {
    elements.first().addClass('item-selected');
  }
})

const COLLAPSES_LIST = 'COLLAPSES_LIST'

$(document).ready(function() {
  let panels = localStorageStore.get(COLLAPSES_LIST)
  panels = panels !== undefined ? panels : []
  _.each(panels, panel => {
    const item = $('#' + panel)
    if (item.hasClass('items-list')) {
      item.collapse('show')
    }
  })
})

$('.items-list').on('shown.bs.collapse', function() {
  const active = $(this).attr('id')
  let panels = localStorageStore.get(COLLAPSES_LIST)
  panels = panels === undefined ? [] : panels
  if (panels.indexOf(active) == -1) {
    panels.push(active);
  }
  localStorageStore.set(COLLAPSES_LIST, panels);
})

$('.items-list').on('hidden.bs.collapse', function() {
  const active = $(this).attr('id')
  let panels = localStorageStore.get(COLLAPSES_LIST)
  panels = panels === undefined ? [] : panels
  const elementIndex = panels.indexOf(active)
  if (elementIndex !== -1) {
    panels.splice(elementIndex, 1)
  }
  localStorageStore.set(COLLAPSES_LIST, panels);
})

const getStarted = [
  '/docs/started',
  '/docs/account/firewall',
  '/docs/content/authoring',
  '/docs/content/authoring/assessments',
  '/docs/content/authoring/imvid',
  '/docs/content/courses/recommended',
  '/docs/ide/boxes/installsw',
  '/docs/ide/boxes/terminal',
  '/docs/ide/navigation/add-file',
  '/docs/ide/navigation/exiting',
  '/docs/project',
  '/docs/project/creating',
  '/docs/project/packs',
  '/docs/project/stacks',
  '/docs/student/classes',
  '/docs/student/dyslexia',
  '/docs/student/guides',
  '/docs/student/myclassroom',
  '/docs/student/myfirstproject',
  '/docs/student/password',
  '/docs/student/studentview',
  '/docs/teacher/assess',
  '/docs/teacher/assess/assessments',
  '/docs/teacher/assess/grading',
  '/docs/teacher/assess/progress',
  '/docs/teacher/assess/studentcode',
  '/docs/teacher/classes',
  '/docs/teacher/classes/assign-module',
  '/docs/teacher/classes/assign-project',
  '/docs/teacher/classes/changepassword',
  '/docs/teacher/classes/create-class',
  '/docs/teacher/classes/disable',
  '/docs/teacher/classes/pin',
  '/docs/teacher/classes/removestudent',
  '/docs/teacher/classes/solutions',
  '/docs/teacher/create',
  '/docs/teacher/create/addowners',
  '/docs/teacher/create/addstudents',
  '/docs/teacher/create/addteachers',
  '/docs/teacher/create/adminrole',
  '/docs/teacher/create/bulkupload',
  '/docs/teacher/create/createorg',
  '/docs/teacher/create/removemembers',
  '/docs/teacher/create/removeowners',
  '/docs/teacher/create/viewmembers'
]

const documentation = [
  '/docs',
  '/docs/content/authoring',
  '/docs/content/authoring/add-section',
  '/docs/content/authoring/assessments',
  '/docs/content/authoring/assessments/assessments-code-tests',
  '/docs/content/authoring/assessments/assessments-fitb',
  '/docs/content/authoring/assessments/assessments-manual',
  '/docs/content/authoring/assessments/assessments-mcq',
  '/docs/content/authoring/auto-open',
  '/docs/content/authoring/chapter',
  '/docs/content/authoring/collapse',
  '/docs/content/authoring/delete-section',
  '/docs/content/authoring/edit',
  '/docs/content/authoring/example',
  '/docs/content/authoring/hide-folder',
  '/docs/content/authoring/imvid',
  '/docs/content/authoring/inline',
  '/docs/content/authoring/layouts',
  '/docs/content/authoring/overview',
  '/docs/content/authoring/playmode',
  '/docs/content/authoring/real-time',
  '/docs/content/authoring/solutions',
  '/docs/content/authoring/strategies',
  '/docs/content/authoring/techdetails',
  '/docs/content/courses',
  '/docs/content/courses/coursefind',
  '/docs/content/courses/courseview',
  '/docs/content/courses/crunch',
  '/docs/content/courses/currmap2012',
  '/docs/content/courses/currmap2016',
  '/docs/content/courses/flode',
  '/docs/content/courses/lexikon',
  '/docs/content/courses/organisation',
  '/docs/content/courses/recommended',
  '/docs/content/courses/tkinter',
  '/docs/content/publish',
  '/docs/content/publish/course-add',
  '/docs/content/publish/course-create',
  '/docs/content/publish/course-public',
  '/docs/content/publish/delete',
  '/docs/content/publish/ordering',
  '/docs/content/publish/refresh',
  '/docs/content/publish/unit-add',
  '/docs/ide/boxes',
  '/docs/ide/boxes/access',
  '/docs/ide/boxes/access/ext-access',
  '/docs/ide/boxes/access/ssh-access',
  '/docs/ide/boxes/access/sshkeys',
  '/docs/ide/boxes/always-on',
  '/docs/ide/boxes/granting-access',
  '/docs/ide/boxes/installsw',
  '/docs/ide/boxes/installsw/box-parts',
  '/docs/ide/boxes/installsw/default-installed',
  '/docs/ide/boxes/installsw/file-locations',
  '/docs/ide/boxes/installsw/parts-coding',
  '/docs/ide/boxes/installsw/request-language',
  '/docs/ide/boxes/overview',
  '/docs/ide/boxes/restart-reset',
  '/docs/ide/boxes/runmenu',
  '/docs/ide/boxes/startup',
  '/docs/ide/boxes/terminal',
  '/docs/ide/editing',
  '/docs/ide/editing/color-preview',
  '/docs/ide/editing/emmet',
  '/docs/ide/editing/emmet/emmet-abbreviations',
  '/docs/ide/editing/emmet/emmet-actions',
  '/docs/ide/editing/emmet/emmet-docs',
  '/docs/ide/editing/emmet/emmet-ref',
  '/docs/ide/editing/git',
  '/docs/ide/editing/git/active-branch',
  '/docs/ide/editing/git/git-primer',
  '/docs/ide/editing/git/git-viewing',
  '/docs/ide/editing/git/github-keys',
  '/docs/ide/editing/git/no-remote',
  '/docs/ide/editing/git/remotes',
  '/docs/ide/editing/git/resources',
  '/docs/ide/editing/ide-beautify',
  '/docs/ide/editing/ide-force-lang',
  '/docs/ide/editing/kb-shortcuts',
  '/docs/ide/editing/multicursor',
  '/docs/ide/editing/search-replace',
  '/docs/ide/features',
  '/docs/ide/features/ide-beautify',
  '/docs/ide/features/autocomplete',
  '/docs/ide/features/command-bar',
  '/docs/ide/features/debugging',
  '/docs/ide/features/fork',
  '/docs/ide/features/inline-preview',
  '/docs/ide/features/quick-open',
  '/docs/ide/features/real-time',
  '/docs/ide/features/saving',
  '/docs/ide/features/sharing',
  '/docs/ide/navigation',
  '/docs/ide/navigation/add-file',
  '/docs/ide/navigation/add-folder',
  '/docs/ide/navigation/delete-folder',
  '/docs/ide/navigation/dragging',
  '/docs/ide/navigation/editing',
  '/docs/ide/navigation/exiting',
  '/docs/ide/navigation/export',
  '/docs/ide/navigation/readme-md',
  '/docs/ide/navigation/templates',
  '/docs/ide/navigation/upload',
  '/docs/ide/panels',
  '/docs/ide/panels/full-screen',
  '/docs/ide/panels/panel-actions',
  '/docs/ide/tools',
  '/docs/ide/tools/deployment',
  '/docs/ide/tools/deployment',
  '/docs/ide/tools/deployment/basepath',
  '/docs/ide/tools/deployment/create',
  '/docs/ide/tools/deployment/deploy',
  '/docs/ide/tools/deployment/deployment-keys',
  '/docs/ide/tools/deployment/deployment-ssh',
  '/docs/ide/tools/deployment/history',
  '/docs/ide/tools/deployment/specific-files',
  '/docs/ide/tools/deployment/type-ftp',
  '/docs/ide/tools/deployment/type-git',
  '/docs/ide/tools/deployment/type-nj',
  '/docs/ide/tools/deployment/type-parse',
  '/docs/ide/tools/deployment/type-rsync',
  '/docs/ide/tools/deployment/type-sftp',
  '/docs/ide/tools/phonegap',
  '/docs/ide/tools/phonegap/authtoken',
  '/docs/ide/tools/phonegap/build',
  '/docs/ide/tools/phonegap/config',
  '/docs/ide/tools/ssh',
  '/docs/ide/tools/ssh/quick-connect',
  '/docs/ide/tools/ssh/ssh-manager',
  '/docs/project/accessing',
  '/docs/project/accessing-others',
  '/docs/project/creating',
  '/docs/project/index',
  '/docs/project/packs',
  '/docs/project/packs/certified',
  '/docs/project/packs/create',
  '/docs/project/packs/delete',
  '/docs/project/packs/guidelines',
  '/docs/project/packs/overview',
  '/docs/project/packs/requests',
  '/docs/project/packs/reuse',
  '/docs/project/packs/selecting',
  '/docs/project/packs/update',
  '/docs/project/searchprojects',
  '/docs/project/stacks',
  '/docs/project/stacks/exclusions',
  '/docs/project/stacks/guidelines',
  '/docs/project/stacks/listing',
  '/docs/project/stacks/new',
  '/docs/project/stacks/stack-overview',
  '/docs/project/stacks/update',
  '/docs/project/stacks/using',
  '/docs/student',
  '/docs/student/classes',
  '/docs/student/dyslexia',
  '/docs/student/myclassroom',
  '/docs/student/myfirstproject',
  '/docs/student/password',
  '/docs/teacher/assess',
  '/docs/teacher/assess/assessments',
  '/docs/teacher/assess/grading',
  '/docs/teacher/assess/studentcode',
  '/docs/teacher/classes',
  '/docs/teacher/classes/addteachers',
  '/docs/teacher/classes/assign-module',
  '/docs/teacher/classes/assign-project',
  '/docs/teacher/classes/changepassword',
  '/docs/teacher/classes/delete',
  '/docs/teacher/classes/disable',
  '/docs/teacher/classes/pin',
  '/docs/teacher/classes/removestudent',
  '/docs/teacher/classes/solutions',
  '/docs/teacher/create',
  '/docs/teacher/create/addowners',
  '/docs/teacher/create/addstudents',
  '/docs/teacher/create/addteachers',
  '/docs/teacher/create/adminrole',
  '/docs/teacher/create/bulkupload',
  '/docs/teacher/create/deleteorg',
  '/docs/teacher/create/removemembers',
  '/docs/teacher/create/removeowners',
  '/docs/teacher/create/viewmembers',
  '/docs/teacher/plag',
  '/docs/teacher/plag/plag-ref',
  '/docs/teacher/plag/plag-report',
  '/docs/teacher/plag/plag-start'
]

const settings = [
  '/docs/settings',
  '/docs/ide/customization/codio-prefs',
  '/docs/ide/customization/project-prefs',
  '/docs/ide/customization/prefs-list',
  '/docs/ide/customization/project-settings',
  '/docs/ide/customization/permissions',
  '/docs/account/publickey',
  '/docs/account/github',
  '/docs/account/bitbucket',
  '/docs/account/delete',
  '/docs/teacher/classes/changepassword',
  '/docs/account/password/forgotpassword',
  '/docs/account/password',
  '/docs/account/firewall',
  '/docs/account/navigation',
  '/docs/account/browser',
  '/docs/account/billing',
  '/docs/account/billing',
  '/docs/student',
  '/docs/account/cussupport'
]

const STORED_TAB = 'STORED_TAB'
const DOCUMENT_REFERRER = 'DOCUMENT_REFERRER'

const DOCUMENTATION_TAB = 'documentation'
const GETSTARTED_TAB = 'get-started'
const SETTINGS_TAB = 'settings'

const types = {}
types[DOCUMENTATION_TAB] = documentation
types[SETTINGS_TAB] = settings
types[GETSTARTED_TAB] = getStarted

$(document).ready(function() {

  let storedTab = localStorageStore.get(STORED_TAB)

  let tab = DOCUMENTATION_TAB
  const referrer = sessionStorageStore.get(DOCUMENT_REFERRER) || ''
  const refPath = referrer
      .replace(document.origin, '')
      .replace(/\/$/, '')
  const path = location.pathname.replace(/\/$/, '')

  if (refPath !== '' && referrer.indexOf(document.origin + '/docs') === 0) {
    tab = storedTab

    if (documentation[0] === path) {
      tab = DOCUMENTATION_TAB
    } else if (getStarted[0] === path) {
      tab = GETSTARTED_TAB
    } else if (settings[0] === path) {
      tab = SETTINGS_TAB
    }

    if (documentation[0] === path || getStarted[0] === path || settings[0] === path) {
      localStorageStore.set(STORED_TAB, tab);
    }
  } else {
    if (documentation.indexOf(path) !== -1) {
      tab = DOCUMENTATION_TAB
    } else if (settings.indexOf(path) !== -1) {
      tab = SETTINGS_TAB
    } else if (getStarted.indexOf(path) !== -1) {
      tab = GETSTARTED_TAB
    }
    localStorageStore.set(STORED_TAB, tab);
  }

  $('.section-block-row-three .' + tab).addClass('selected')
  sessionStorageStore.set(DOCUMENT_REFERRER, location.href)
})
