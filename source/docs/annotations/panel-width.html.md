---
title: Annotations panel widths
class_name: docs
full_width: true
---

When an Annotation is displayed, the screen is split into two panels. You can control the width of the panels depending on whether or not there is any code associated with the Annotation.

This is managed using Preferences and as with all Preferences, you can manage this at the User level or override users settings at the project level.

The two Preferences keys are

	[codio-annotation]
	annotation_panel_width_no_code = 100
	annotation_panel_width_with_code = 45

These are % values, so the above two settings specify

- if there is no code associated with the panel, set the Annotation panel width to 100%
- if there is code associated with the panel, set the Annotation panel width to 45%

