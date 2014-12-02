---
title: Uninstalling a component
class_name: docs
full_width: true
---

To uninstall a component, go to the the Installed Components tab and uninstall it from the list. This uninstalls all dependencies as well.

![bower tree](/img/docs/bower-remove.png)

You can uninstall a component by deleting the component from the bower_components folder in your project tree although this it is better to let Bower manage this. Should you unintentionally delete a dependency, simply refresh the parent component and all dependencies will be reinstalled and updated.

Uninstalling a component will not remove any references within your code to components, so you will need to remove them yourself.


