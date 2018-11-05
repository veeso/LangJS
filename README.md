# Lang.JS

---

Developed by Christian Visintin

Current Version 1.2

---

## Introduction

LangJS is a very simple script which allows to manage multi language web pages. It is enough to create JSONs files containing the translations and then associate each key to elements in HTML adding to them the attribute 'translate'.
**Lang.JS requires jQuery!**

---

## Implementation

Implementing LangJS is pretty much simple. All you need is preparing an HTML page with all the elements with text you want to be translated with an attribute 'translate=key' where key is the path in a JSON file which contains the text associated to that element. Then, is enough to call the JavaScript function setLanguage(lang) passing the language filename.  

**In test folder is possible to see an implementation of this.**

Let's see step by step how to do this:

### 1) Create a language JSON file

We'll create the english language file 'en.json' and we'll place the file in a directory called /lang/, but can be anything, it's enough to change the language files path; to do this just set the languagePath variable to a different path.

```json
{
  "home": {
    "title": "Sample page",
    "subheader": "This is a sample page"
  }
}
```

### 2) Add translate attributes to our web page

This has to be made for all the elements which text has to be translated

```html
<html>
  ...
  <h1 translate="home.title"></h1>
  <h2 translate="home.subheader"></h2>
  ...
</html>
```

### 3) Tell our page to set the language

To do this is enough to call setLanguage() function passing a string which is the name of the JSON language file, so in this case we'll call setLanguage('en').  
I obviously suggest you to set the language in the cookie and to make the page call immediately setLanguage passing the language read from cookie or a default value if not set.

```js
setLanguage('en');
```

Now everytime we want to change the only thing we'll have to do is to call setLanguage again passing another language as value.

---

## Functions

### setLanguage

void *setLanguage(string lang)*
Loads the language dictionary JSON file and update all texts in page in an element with 'translate' attribute with the value read from the dictionary.

### getInstantTranslation

string *getInstantTranslation(string dictKey)*
Get instant translations for a key and returns the value associated to that key as string.
Since it **doesn't load the JSON dictionary file** (because it it asynchronous) setLanguage must be called at least once first.

---

## Changelog

### Version 1.2 (05/11/2018)

* Code improvement

### Version 1.1 (04/11/2018)

* Added *getInstantTranslation()* function

### Version 1.0 (02/11/2018)

* First Release

---

## License

LangJS - Instant language manager for your Webpage
Developed by Christian Visintin

MIT License

Copyright (c) 2018 Christian Visintin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
