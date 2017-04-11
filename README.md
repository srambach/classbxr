# classbxr
This project adds a box and the class names around elements for easier debugging and visualization of the HTML/CSS structure.

![classbxr in action](http://g.recordit.co/rCwgQvsJi2.gif)

## How to use it

It's easy, just load classbxr CDN on your HTML `<head>` and add the `.classbxr` on your `<body>` or any other element.

### 1. Load classbxr CDN

```
<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="https://cdn.rawgit.com/srambach/classbxr/5456df40/css/classbxr.css">
  </head>
  ...
```

### 2. Add classbxr class to the body

```
<body class="classbxr">
```

### 3. Enjoy!

## Contribute to classbxr

You can help improve classbxr by reporting an issue or sending a PR.

To build the project locally:

1. Fork and clone this repo.
1. If you don't have [nodejs](https://nodejs.org/en/) installed, go ahead and install it.
1. Once inside your folder run `npm install`
1. Now run `gulp`

A browser window will open with the test page on [http://localhost:3000/](http://localhost:3000/).

Edit the `classbxr.scss` and never the css directly.
