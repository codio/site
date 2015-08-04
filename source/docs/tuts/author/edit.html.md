---
title: "Editing & Markdown"
class_name: docs
full_width: true
---

When you are in Edit mode, you can select a section by

- using the navigation buttons in the header area
- selecting a section from the section list

![](/img/docs/guides/editnav.png)

##Renaming the Section
You can rename your section by clicking on the section title in the header area.

##Writing Guide content
You can then start writing your content in the main content area.

## Cheat Sheet
We would recommend that you check out our [Guides Cheat Sheet](https://bitbucket.org/codiocontent/guides-cheat-sheet) and import into your Codio account to review. See [here](/docs/dashboard/projects/creating/) for more information on importing.

##Markdown
For those of you not familiar with Markdown, it is an extremely easy way of writing content without having to worry about HTML.

When in Play Mode, your content is rendered beautifully and you can even override the default CSS styling.

You can also insert [images, videos and hyperlinks](/docs/tuts/author/imvid).


We would recommend that you check out our [Guides Cheat Sheet](https://bitbucket.org/codiocontent/guides-cheat-sheet) and import into your Codio account to review. See [here](/docs/dashboard/projects/creating/) for more information on importing.

Here is a summary of the Markdown formatting codes

##Headers/Titles
To display a header or title, you can use the `#` character at the start of the line. The more `#` characters you add, the smaller the font.

```markdown
# Big title
## Smaller title
### Even smaller title
#### etc.
```

##Bold and Italic
To create bold or italic text, you use `**` and `*` either side of the respective words.

```markdown
I want to say that **this is really important**, you know
I *really* like chocolate
```

##Bullet Lists
To create a list of bullet points, you start the line with a `-`

```markdown
- Bullet 1
- Bullet 2
- Bullet 3
- etc
```

##Numbered Lists
To create a numbered list, you start the line with a `1.`. The numbers are automatically calculated for you.

```markdown
1. Item 1
1. Item 2
1. Item 3
1. etc
```

##Code Blocks
If you want to show some code, styled with the Courier Font, in a box and with syntax rules applied


```js
var i;
for(i = 0; i < 10; i++) {
   document.write(i);
}
```

Note that you can specify a language type after the top 3 backticks. There are a lot of different languages supported. These are pretty intuitive for most languages but you can [see a full list of supported languages here](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). You should search for your language and then use the `alias` shown.

##Code Segments
If you want to insert a piece of code inline with the rest of your text, then you use a single ` character either side of the text.

```markdown
We can define a variable `var x;` as shown
```


##Indented Lists
If you want to indent a list, then indent just 2 spaces and it will indent.

```markdown
  - Bullet 1
  - Bullet 2
  - Bullet 3
  - etc
```

##Callout Blocks
If you want to show a callout block a number of options are available and others can be easily added if required

  - info
  - warning
  - topic
  - definition
  - challenge
  - guidance 

e.g.

```
|||info
# info

Some text
|||
```
![](/img/docs/guides/callout_info.png)

The `Guidance` callout block is only visible in Play mode to members of the Teacher group. It is not visible for members of the Student Group 

Check out our  [Guides Cheat Sheet](https://bitbucket.org/codiocontent/guides-cheat-sheet) and import into your Codio account to see all the options.

##Hyperlinks, Images, Videos & iframes
We describe this in [this section](/docs/tuts/author/imvid).

##HTML
You can include HTML tags

##MathJax 

[MathJax](http://www.mathjax.org/) is supported

e.g

```markdown
When $$a \ne 0$$ there are two solutions to $$(ax^2 + bx + c = 0)$$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
```

<img alt="authtoken" src="/img/docs/guides/mathjax.png" class="simple"/>


##Guides Cheat Sheet

Check out our  [Guides Cheat Sheet](https://bitbucket.org/codiocontent/guides-cheat-sheet) and import into your Codio account to review. See [here](/docs/dashboard/projects/creating/) for more information on importing.
