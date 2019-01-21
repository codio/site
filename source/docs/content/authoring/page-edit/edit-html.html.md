---
title: "HTML content editing "
class_name: docs
full_width: true
---

We do not recommend this setting unless you have very specific reasons. It is much harder to use and maintain than markdown but for those who want ultimate control over appearance it is a good option.

## Setting HTML
You can specify that an individual page be authored using HTML from the content **Settings**. You will find the **Content type** dropdown where you can switch between HTML and markdown.

## CSS header and footer
In order to style your content properly, you should use the **Edit HTML header** and **Edit HTML footer** settings. These can be found in the main **Settings** area on the **Global** tab.

The header and footer information wrap the HTML content for your page. Below is a typical example of a header.

```html
<html>  
<head>
  <meta charset="UTF-8">
		<title>bjlo2e_ch04-1</title>
		<link href=".guides/content/css/my-style.css" rel="stylesheet" type="text/css" />    
		<script src="https://codio.com/codio-client.js" type="text/javascript"></script>
		<script src=".guides/content/script/my-script.js" type="text/javascript"></script>
	</head>

<body>
```

And here is the footer.

```html
</body>
</html>
```

## Support functions
In a page authored using Markdown, you are able to create buttons and other actions. We provide some javascript functions that support the same functionality.

**Important** : if you use any of the functions listed below then you must load `https://codio.com/codio-client.js`in the HTML Header as shown in the example above.


- `codio.run(command, callback)` - Run a command on the box. `callback` will fire once executed and should be used to communicate back to the user. 
- `codio.runAndShow(command, outputElementId)` - Run a command on the box. All `stdout` will be displayed in `outputElementId`.  
- `codio.open('file', path, panel_num)` - Opens a file located in `path` in the `panel_num` panel, where `0` is the first panel from top left 
- `codio.open('terminal', command, panel_num)`-  Opens a terminal window and executes `command`. `panel_num` specifies the location of the panel, where `0` is the first panel from top left. 
- `codio.open('preview', url, panel_num)` - Opens a preview window at `url`. `panel_num` specifies the location of the panel, where `0` is the first panel from top left. 
- `codio.goToNextSection()` - Moves to the next page in the guide. 
- `codio.goToPreviousSection()` - Moves to the previous page in the guide. 
- `codio.switchUnit(unitId)` - Changes to a different unit. The Unit ID is found by opening the unit and getting the ID from the URL. 
- `codio.goToSectionTitled('Section Title')` - Switches to the page whose title is "Section Title'. 
- `codio.assessments.check(assessmentId)` - Executes the assessment 
- `codio.assessments.reset(assessmentId)` - Resets any response and score that the user may have already provided for `assessmentId`. 
- `codio.assessments.get(assessmentId, callback)` - Gets the result data for a completed assessment 
- `codio.assessments.send(assessmentId, answer, points, callback)` - Sends result data for a custom assessment. `answer` contains the custom result data for `assessment` and will be stored in Codio. You can use `codio.assessments.get()` to reconstruct the output for an already answered question. 
- `codio.resetCurrentFiles()` - Allows students to restore current files in guides within your content. 
