---
title: "Abbreviations"
class_name: docs
full_width: true
---

This is a way of generating HTML using a CSS selector inspired approach. Take a look at the following examples.

You simply enter the abbreviation in the Code Editor and then press the Tab key to expand the abbreviation.


## Basic HTML Example

```css
div>ul>li*3
```

results in

```html
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```


## Juicier HTML Example

```css
#page>div.logo+ul#navigation>li*5>a{Item $}
```

results in

```html
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

## Insertion Stops / Edit Points
Emmet offers some abbreviations that have insertion points. For example,

```css
a:link
```

will insert

```html
<a href="http://|"></a>
```

Where the `|` character represents the cursor after insertion. After you have entered the `href` url you should press `ctrl+alt+right arrow` (not the Tab key) to jump to the next edit point.

## More HTML Examples
Be sure to check out [HTML Abbreviations](http://docs.emmet.io/abbreviations/).

And also take a look at the [cheat sheet](/docs/ide/editing/emmet/emmet-ref/) as there are an awful lot of abbreviations for you to take advantage of.


## CSS Examples

`w100p` results in `width: 100%`
`m10p30e5x` results in `margin: 10% 30em 5ex`

and

```cs
p100+m10e
```

results in

```css
padding: 100px;
margin: 10em;
```

and how about this for gradients

```css
lg(left, #fc0, 30%, red)
```

results in

```css
background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#fc0), color-stop(0.5, 30%), to(red));
background-image: -webkit-linear-gradient(left, #fc0, 30%, red);
background-image: -moz-linear-gradient(left, #fc0, 30%, red);
background-image: -o-linear-gradient(left, #fc0, 30%, red);
background-image: linear-gradient(left, #fc0, 30%, red);
```

## Fuzzy Search
If you take a look at [cheat sheet](/docs/ide/editing/emmet/emmet-ref/), you’ll find that there are too many CSS snippets to remember. Also, some of them might be a bit lengthy for sake of logical separation.

To make CSS writing a bit easier, Emmet implements fuzzy search logic for CSS snippets: every time you enter an unknown abbreviation, Emmet will try to find the closest snippet definition.

For example, instead of writing `ov:h` (overflow: hidden;) abbreviation, you can write `ov-h`, `ovh` or even `oh`. You can play around with the fuzzy search in text editor below. Try to find as many variations as possible (use Tab key to expand abbreviations) for `bxz:cb`, `ovx:h` and `pos:a` snippets.

## More CSS Examples
For more details on CSS abbreviations, please go to the [Emmet documentation](http://docs.emmet.io/css-abbreviations/) and be sure to look at the sub-chapters.

But also be sure to check out the [cheat sheet](/docs/ide/editing/emmet/emmet-ref/).
