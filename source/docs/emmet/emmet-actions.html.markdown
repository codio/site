---
title: "Special Keyboard Actions"
class_name: docs
full_width: true
---

Emmet also offers a very nice range of keyboard shortcuts to speed productivity even further. Keyboard actions can be modified in [Preferences](/docs/settings-prefs/codio-prefs)

##Match Tag Pair

`Mac:Cmd+D (inward) and Shift+Cmd+D (outward)`
`WinLin:Ctrl+D (inward) and Shift+Ctrl+D (outward)

A well-known tag balancing: searches for tag or tag's content bounds from current cursor position and selects it. It will expand (outward balancing) or shrink (inward balancing) selection when called multiple times. Not every editor supports both inward and outward balancing due of some implementation issues, most editors have outward balancing only.

<a href="http://docs.emmet.io/actions/match-pair/" target"_blank">Click here to see it in the Emmet site.</a>


##Go To Matching Pair

`Mac: Shift+Cmd+T`
`Win: Shift+Ctrl+T`

In HTML, allows you to quickly traverse between opening and closing tag.

<a href="http://docs.emmet.io/actions/go-to-pair/" target"_blank">Click here to see it in the Emmet site.</a>


##Wrap with Abbreviation

`Mac/Win: Shift+Cmd+A`

A very powerful feature, it takes an abbreviation, expands it and places currently selected content in the last element of generated snippet. If there’s no selection, action will silently call “Match Tag Pair” to wrap context element.

<a href="http://docs.emmet.io/actions/wrap-with-abbreviation/" target"_blank">Click here to see it in the Emmet site.</a>


##Go to Edit Point

`Win: Ctrl+Alt+Right Arrow or Left Arrow`

This action works for HTML code blocks and allows you to quickly traverse between important code points:

- between tags
- empty attributes
- newlines with indentation

<a href="http://docs.emmet.io/actions/go-to-edit-point/" target"_blank">Click here to see it in the Emmet site.</a>


##Select Item

`Mac/Win: Shift+Cmd+, or .`

Action is similar to “Go to Edit Point”, but selects important code parts.

In HTML, these are tag name, full attribute and attribute value. For class attribute it also selects distinct classes.

In CSS, it matches selector, full property and property value. For complex values and functions like 1px solid red or url(image.jpg) also selects part of it.

<a href="http://docs.emmet.io/actions/select-item/" target"_blank">Click here to see it in the Emmet site.</a>


##Toggle Comment

`Mac: Cmd+/`
`Win: Ctrl+/`

This action, as name says, toggles comments on and off for the selected line. Works nicely in CSS and HTML files.

<a href="http://docs.emmet.io/actions/toggle-comment/" target"_blank">Click here to see it in the Emmet site.</a>


##Remove Tag

`Mac: Cmd+K`
`Win: Ctrl+K`

Quickly removes tag, found by “Match Tag Pair” from current cursor position, and adjusts indentation.

<a href="http://docs.emmet.io/actions/remove-tag/" target"_blank">Click here to see it in the Emmet site.</a>

##Merge Lines

`Mac: Shift+Cmd+M`
`Win: Shift+Ctrl+M`

Merges selected lines into a single line. But when there’s no selection, will match context HTML tag.

<a href="http://docs.emmet.io/actions/merge-lines/" target"_blank">Click here to see it in the Emmet site.</a>


##Inline Calculator

`Mac: Shift+Cmd+Y`
`Win: Shift+Ctrl+Y`

Evaluates simple math expressions like 2*4 or 10/2 and outputs its result. You can use \ operator which is equivalent to round(a/b).

Very useful in CSS where numeric values should be modified frequently.

<a href="http://docs.emmet.io/actions/evaluate-math/" target"_blank">Click here to see it in the Emmet site.</a>


##Increment/Decrement Number

`Mac/Win : Alt+Up/Down (inc/dec by 0.1)`
`Mac/Win : Ctrl+Up/Down (inc/dec by 1)`
`Mac/Win : Ctrl+Alt+Up/Down (inc/dec by 10)`

This action, as name says, increments or decrements the number under the cursor with different steps: 0.1, 1 or 10.

<a href="http://docs.emmet.io/actions/inc-dec-number/" target"_blank">Click here to see it in the Emmet site.</a>


