# classbxr
This project adds a box and the class names around elements for easier debugging and visualization of the HTML/CSS structure.

![classbxr in action](http://g.recordit.co/rCwgQvsJi2.gif)

## How to use it

### Bookmarklet

A little piece of JavaScript that can be saved as a bookmark in your browser, and then clicked to instantly enable/disable classbxr.

##### 1. Go to the [CodePen](http://codepen.io/ryanaltvater/pen/eWBKNG)

##### 2. Drag the button to your bookmarks bar

##### 3. Enjoy!

### Installation

It's easy, just load classbxr CDN on your HTML `<head>` and add the `.classbxr` on your `<body>` or any other element.

##### 1. Load classbxr CDN

```
<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="https://cdn.rawgit.com/srambach/classbxr/1767f73/css/classbxr.css">
  </head>
  ...
```

##### 2. Add classbxr class to the body

```
<body class="classbxr">
```

##### 3. Enjoy!

## Contribute to classbxr

You can help improve classbxr by reporting an issue or sending a PR.

To build the project locally:

1. Fork and clone this repo.
2. If you don't have [nodejs](https://nodejs.org/en/) installed, go ahead and install it.
3. Once inside your folder run `npm install`
4. Now run `gulp`

A browser window will open with the test page on [http://localhost:3000/](http://localhost:3000/).

Edit the `classbxr.scss` and never the css directly.