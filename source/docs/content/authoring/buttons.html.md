---
title: "Custom Buttons"
class_name: docs
full_width: true
---
Custom buttons are a powerful feature that let you insert a button into your Guide content that when pressed can carry out any custom action.

There are 2 ways to use a custom button

## To launch a process
This will launch a process and execute a terminal command. 

```javascript
{Button Text}(command paramater1 parameter2 parameterN)
```

## Launching a process in a terminal window
There are cases where you will want to launch a command in a dedicated terminal window. A typical example is when student code requires input from the user. Codio cannot handle standard inputs through the Guides window, so use the following button command.

```javascript
{Button Text | terminal}(command)
```

## Writing a custom event handler
This offers you the most flexibility and allows you to write your own custom button press handler. A common use case is executing tests on user code.

To do this, you should use the following format for your custom button.

```javascript
{Button Text|custom}(myId)
```

## Loading Scripts
You should point your Guide page to a script file to load (Settings>Global>Scripts). Although you will see this field for all pages, you would usually just reference any scripts that need loading just once, best on the first page. You can reference more than one script over several lines. Any script files that are referenced anywhere within the Guide will always be loaded when the Guide plays.

<img alt="authtoken" src="/img/docs/guides/scripts.png" class="simple"/>

## Event Listener
The event listener is able to perform your custom task. It will display a custom message area beneath it into which you can write your own results data. The message data can be a custom message that a test might return and can be plain text or HTML. 

The icon that appears in the top left of the message area can be controlled from your event listener, as shown below.

```javascript
window.addEventListener('codio-button-custom', function (ev) {
  if (codio) {
  
    // Set the 'in progress' button icon
    codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking');
    if (ev.cmd == 'test1') {
      ... do something
    }
    if (ev.cmd == 'test2') {
      ... do something
    }
    
    // When completed, set the 'success' icon 
    // and pass back plain text or HTML to dispay 
    // inside the message box.
    codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, 'Extremely well done!');
    
  }
});
```

- `ev.id` is the Guides internal id for the button.
- `ev.cmd` is the `myId` text you specified in the button with `{Button Text|custom}(myId)`. This is typically used to indicate the id of the test you wish to run or just the specific button that is being pressed.

The available button commands are 

```javascript
codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking..');
codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, 'Good job!');
codio.setButtonValue(ev.id, codio.BUTTON_STATE.FAILURE, 'Bad Job :(');
codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, 'Internal error');
```

The 3rd parameter can contain any text to display in the button's attached message area. It can be plain text or HTML.




