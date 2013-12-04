---
title: Preferences List
class_name: docs
full_width: true
---

The following is a complete list of the preferences.

To see all of the keyboard shortcuts , including any overrides you or the project has made, use the Help->Shortcuts menu item within the IDE.

The setting id and default value are shown in square brackets.

##Editor [editor]

- Show line numbers [line_numbers=true]
- Visible tabs [visible_tabs=false]
- Smart Indent [smart_indent=true] - whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before).
- Font size [font_size=12]
- Wrap [wrap=false] wrap long lines
- Tab size [tab-size=4]
- Highlight Active Line [highlight_active=true]
- Theme (theme=default]
- Use tabs for indentation [indent_with_tabs=false]
- Allow code folding [folding=true]
- Enable linting for Javascript, JSON & CoffeeScript [linting=true]
- Show matching brackets to be highlighted whenever the cursor is next to them [match_brackets=true]
- Highlights the tags around the cursor [match_tags = true]
- Auto-close brackets and quotes when typed [auto_close_brackets = true]
- Auto-close tags when the '/' of a closing tag is typed [auto_close_tags_when_opening = true]
- Auto-close the tag when the final '>' of an opening tag is typed [auto_close_tags_when_closing = true]
- Show whitespace [show_trailing_space = false]
- Prefix new lines inside C-like block comments with an asterisk when Enter is pressed [continue_comments = true]
- Default key map to use (can be default, vim or emacs) [keymap = default]
- Show auto-completions [key_autocomplete = Ctrl+Space]
- Toggle comment [key_toggleComment = Cmd+/]
- Go to start of line [key_go_line_start = Cmd+Left]
- Go to end of line [key_go_line_end = Cmd+Right]
- Select all [key_select_all = Cmd+A]
- Delete word before [key_del_group_before = Alt+Backspace]
- Delete line [key_delete_line = Ctrl+Shift+K]
- Delete group after [key_del_group_after = Alt+Delete]
- Go to end of document [key_go_doc_end = Cmd+End]
- Find [key_find = Cmd+F]
- Find next [key_find_next = Cmd+G]
- Replace [key_replace = Cmd+Alt+F]
- Find previous [key_find_prev = Shift+Cmd+G]
- Replace all [key_replace_all = Shift+Cmd+Alt+F]
- Project wide search [key_replaceProject = Ctrl+H]
- Project wide search and replace [key_searchProject = Ctrl+Shift+H]
- Go to beginning of document [key_go_doc_start = Cmd+Up]
- Go left [key_go_group_left = Alt+Left]
- Go right [key_go_group_right = Alt+Right]
- Redo [key_redo = Cmd+Y]
- Undo [key_undo = Cmd+Z]
- Indent less [key_indent_less = Cmd+[ ]
- Indent more [key_indent_more = Cmd+] ]

##Code Beautifier [code-beautifier]
- Indent level [indent_level = 0]
- Indent with tabs. Overrides indent char and indent size [indent_with_tabs = false]
- Preserve line-breaks [preserve_newlines = false]
- Number of line-breaks to be preserved in one chunk [max_preserve_newlines = 5]
- Enable jslint-strict mode [jslint_happy = false]
- Brace style [brace_style = collapse]
- Preserve array indentation [keep_array_indentation = false]
- Preserve function indentation [keep_function_indentation = false]
- Space before conditional [space_before_conditional = false]
- Break chained method calls across subsequent lines [break_chained_methods = false]
- Indent eval code [eval_code = false]
- Decode printable characters encoded in XNN notation [unescape_strings = false]
- Wrap lines at next opportunity after N characters [wrap_line_length = 0]
- Indent scripts [indent-scripts = normal]
- Format the code [key_format_code = Cmd+Shift+B]

##Annotations [codio-annotation]
- Add annotation tag [key_annotation_add = Alt+A]
- Toggle between annotations.md definition file and tag [key_annotation_toggle = Alt+Shift+A]
- Start annotation tour [key_annotation_start = ]
- Add File To annotations [key_add_file_to_definition = ]


## Javascript code [view-javascript-code]

- Show browser methods in intellisense. Set to false if you are developing server side code [
jquery_autocomplete = true]
- Run ternJs as a worker [ternjs_worker = true]


## Git [git]

- Open git command line [command-line = ]
- Git: pull from origin [pull = ]
- Git: push to origin [push = ]
- Git: create a new branch [show-create-branch = ]
- Git: switch between branches [show-switch-branch = ]
- Git: delete a branch [show-delete-branch = ]
- Git: show remotes [remotes-show = ]


Emmet Shortcust [emmet]

- Tag case [tag_case = asis]
- Attr case [attr_case = asis]
- Attr quotes [attr_quotes = double]
- Each tag on new line [tag_nl = decide]
- with tag_nl === true, defines if leaf node (e.g. node with no children) should have formatted line breaks [tag_nl_leaf = false]
- Place cursor [place_cursor = true]
- Indent tags [indent = true]
- How many inline elements should be to force line break (set to 0 to disable) [inline_break = 3]
- use self-closing style for writing empty elements, e.g. <br /> or <br> [self_closing_tag = xhtml]
- Profile-level output filters, re-defines syntax filters [filters = ]
- Additional filters applied to abbreviation. Unlike 'filters', this preference doesn't override default filters but add the instead every time given profile is chosen [xtraFilters = ]
- Expand abbreviation [expand_abbreviation = Cmd-E]
- Expand abbreviation with tab [expand_abbreviation_with_tab = Tab]
- Match pair outward [match_pair_outward = Cmd-D]
- Match pair inward [match_pair_inward = Shift-Cmd-D]
- Matching pair [matching_pair = Shift-Ctrl-T]
- Wrap with abbreviation [wrap_with_abbreviation = Shift-Cmd-A]
- Next edit point [next_edit_point = Ctrl-Alt-Right]
- Prev edit point [prev_edit_point = Ctrl-Alt-Left]
- Select line [select_line = Cmd-Alt-L]
- Merge lines [merge_lines = Shift-Cmd-M]
- Split/join tag [split_join_tag = Shift-Cmd-J]
- Remove tag [remove_tag = Cmd-K]
- Evaluate math expression [evaluate_math_expression = Shift-Cmd-Y]
- Increment number by 1 [increment_number_by_1 = Ctrl-Up]
- Decrement number by 1 [decrement_number_by_1 = Ctrl-Down]
- Increment number by 0.1 [increment_number_by_01 = Alt-Up]
- Decrement number by 0.1 [decrement_number_by_01 = Alt-Down]
- Increment number by 10 [increment_number_by_10 = Ctrl-Alt-Up]
- Decrement number by 10 [decrement_number_by_10 = Ctrl-Alt-Down]
- Select next item [select_next_item = Shift-Cmd-.]
- Select previous item [select_previous_item = Shift-Cmd-,]
- Reflect css value [reflect_css_value = Cmd-B]
- Insert formatted line break only [insert_formatted_line_break_only = Enter]

##IDE [ide]

- New file [new_file = Alt+Shift+N]
- New folder [new_folder = Alt+Ctrl+Shift+N]
- Delete item [delete_item = Del]
- Rename item [rename_item = Ctrl+Alt+E]
- Reset to the default layout [layout_default = Cmd+Alt+1]
- Split the selected panel horizontally [panel_split_horizontal = Cmd+Alt+2]
- Split the selected panel vertically [panel_split_vertical = Cmd+Alt+3]
- Close the selected panel [panel_close = Cmd+Alt+0]
- Close the selected tab [tab_close = Alt+W]
- Close the tabs in selected panel [tab_close_all = Alt+Shift+W]
- Close others tabs in selected panel, except current [tab_close_others = Cmd+Alt+W]
- Close tabs in selected panel on the left side of the current [tab_close_left = ]
- Close tabs in selected panel on the right side of the current [tab_close_right = ]
- Go to full screen mode [fullscreen = F11]
- Preview or Preview & Deploy [preview = Shift-F9]

