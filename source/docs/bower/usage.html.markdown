---
title: Accessing a component from code
class_name: docs
full_width: true
---

Once you have installed a Bower component, your project will include whatever extra code Bower decided should go in there. The screenshot below shows an example of a component has been loaded into your project.

Bower is unopinionated, so it does not help you actually load the modules. This is completely up to you. You could use require.js (and yes, there is a Bower component for this) or you could simply do

	<script src="components/jquery/jquery.js"></script>



