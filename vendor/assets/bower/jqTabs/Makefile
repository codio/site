NODE_MODULES = node_modules/
NPM_BIN = $(NODE_MODULES).bin/

build: jqTabs.min.js

%.min.js:  %.js
	$(NPM_BIN)uglifyjs --source-map $(@:%=%.map) \
		--in-source-map $(patsubst %,%.map,$<) \
		--output $@ $<

%.js: %.coffee
	$(NODE_MODULES)/coffee-script-redux/bin/coffee -j -i $< > $@
	echo "//@ sourceMappingURL=$(@:%=%.map)" >> $@
	$(NODE_MODULES)/coffee-script-redux/bin/coffee --source-map -i $< > $(@:%=%.map)