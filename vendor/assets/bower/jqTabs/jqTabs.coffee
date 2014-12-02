class jqTabs
	@VERSION : '1.0.1'
	events : {}

	#initial Setup
	#-------------
	constructor: (@$tabsContainer, options) ->
		@activeTab = 0

		#default settings
		@settings =
			activeClass: 'active'
			useHistory: true
			hiddenClass: 'hidden'
			tabsClickable: true

		# extending the options with a jquery function
		$.extend @settings, options

		# if there are events in the options object, attach them
		if options.events?
			for event, callback of options.events
				@on event, callback

		# if the `hasher` library isn't loaded, set useHistory to false regardles of previous setting
		if @settings.useHistory and not hasher?
			@settings.useHistory = false

		if not @settings.tabsClickable
			@settings.useHistory = false

		#creating a `jQuery` object for the tabHeaders, tabContents
		@updateElements()
		#saving the number of tabs
		@numTabs = @$tabContent.length

		#giving the fist tab the 'activeClass' (it is possible to change the name of this class by #passing an optional settings object as the second parameter to the constructor)
		$(@$tabs[0]).addClass @settings.activeClass
		#hide all tabs
		@$tabContent.addClass @settings.hiddenClass
		#and show only the first
		$(@$tabContent[0]).removeClass @settings.hiddenClass

		$('ul.tab-headers', @$tabsContainer).on 'click', 'li', (e) =>
			e.preventDefault()

			if @settings.tabsClickable

				target = $ e.currentTarget

				unless target.hasClass @settings.activeClass
					toTab = @$tabs.index target
					@seek toTab

		if @settings.useHistory
			@setHashChange()

	changeTab : (whereTo) =>
		#save reference to current tab
		$currentTab = $(@$tabs[whereTo])

		#set the active tab, to the tab we seek to
		@activeTab = whereTo

		#remove the `settings.activeClass` from all tabs
		@$tabs.removeClass @settings.activeClass
		#and ad it only to the current tab
		$currentTab.addClass @settings.activeClass

		@$tabContent.addClass @settings.hiddenClass
		$(@$tabContent[whereTo]).removeClass @settings.hiddenClass

	seek : (whereTo) =>
		#only proceed, if the tab you want to seek to exists
		if 0 > whereTo or whereTo >= @numTabs
			return

		goOn = @trigger("beforeChange:#{whereTo}", whereTo) or @trigger('beforeChange', whereTo)

		if goOn isnt false
			if @settings.useHistory
				$currentTab = $(@$tabs[whereTo])
				hash = $currentTab.find('a').attr('href').replace(/\#/, '')
				hasher.changed.active = false
				hasher.setHash hash
				hasher.changed.active = true

			@changeTab whereTo

			@trigger "change:#{whereTo}"
			@trigger 'change', whereTo

		return

	next : ->
		@seek (@activeTab + 1)
		return

	previous : ->
		@seek (@activeTab - 1)
		return

	on : (event, callback) ->
		@events[event] = @events[event] or []
		@events[event].push callback

	off : (event, callback) ->
		if not @events[event]
			return

		if callback
			@events[event].splice @events[event].indexOf(callback), 1
		else
			delete @events[event]

	trigger: (event, args...) ->
		if not @events[event]
			return

		returnValues = for eventCallback in @events[event]
			eventCallback.apply this, args

		return not (false in returnValues)


	insertAfter: (index, tabHeader, tabContent, select) ->
		select = if select != undefined then select else true

		$tabHeader = $(@$tabs[index])
		$newTabHeader = @makeHeader(tabHeader)
		$tabHeader.after($newTabHeader)

		$tabContent = $(@$tabContent[index])
		$newTabContent = @makeContent(tabContent)
		$tabContent.after($newTabContent)

		@numTabs++
		@updateElements()
		@seek(index + 1) if select

		$newTabContent

	insertBefore: (index, tabHeader, tabContent, select) ->
		select = if select != undefined then select else true
		$tabHeader = $(@$tabs[index])
		$newTabHeader = @makeHeader tabHeader
		$tabHeader.before($newTabHeader)

		$tabContent = $(@$tabContent[index])
		$newTabContent = @makeContent tabContent
		$tabContent.before($newTabContent)

		@numTabs++
		@updateElements()
		@seek(index + 1) if select

		$newTabContent

	addTab: (tabHeader, tabContent, select) ->
		if @numTabs is 0
			headerContainer = @$tabsContainer.find('.tab-headers')
			$newTabHeader = @makeHeader tabHeader
			$newTabHeader.addClass @settings.activeClass
			headerContainer.append($newTabHeader)

			$newTabContent = @makeContent tabContent
			$newTabContent.removeClass @settings.hiddenClass
			@$tabsContainer.append $newTabContent

			@updateElements()
			@numTabs++

			$newTabContent
		else
			@insertAfter @numTabs - 1, tabHeader, tabContent, select

	removeTab: (index) ->
		$(@$tabs[index]).remove()
		$(@$tabContent[index]).remove()

		@numTabs--

		@updateElements()

	removeLast: ->

	updateElements: ->
		@$tabs = $('ul.tab-headers li:not(.ignore-tab)', @$tabsContainer)
		@$tabContent = @$tabsContainer.children('div')

	makeHeader: (header) ->
		$('<li/>').append(header)

	makeContent: (content) =>
		$('<div/>', { 'class': 'tabcontent ' + @settings.hiddenClass}).append(content)

	setHashChange : ->
		historyChangeTab = (newHash) =>
			changeTo = -1
			@$tabs.each (index, elem) ->
				href = $(elem).children('a').attr('href')
				href = href.replace(/\#/, '')

				if href == newHash
					changeTo = index
					return false

			if changeTo isnt -1
				@seek changeTo

		hasher.initialized.add historyChangeTab

		hasher.changed.add historyChangeTab

		hasher.init()

		return


window.jqTabs = jqTabs
