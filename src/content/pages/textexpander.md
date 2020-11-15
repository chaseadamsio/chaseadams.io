---
title: TextExpander Snippets
date: "2018-10-31"
aliases:
  - /2018-10-31-textexpander-snippets/
permalink: /textexpander/
---

I love using TextExpander through the day to reduce the amount of redundant typing and copy/pasta I do. It's an excellet tool that makes life a lot easier!

On the iPhone I use it with Editorial app as well so I can leverage my snippets on the go.

## Snippets

A collection of Snippets.

### Create Markdown Link From Current Chrome Tab

I have this split up into 3 separate snippets:

- `chrome.currtab.full.title`
- `chrome.currtab.full.url`
- `md:chrome.currtab.link`

#### chrome.currtab.full.title

This captures the current tab in Chrome's Title.

**Content:** JavaScript
**Label:** `chrome.currtab.full.title`
**Abbreviation:** `chrometitle;`

```js
function getCurrTabTitle(doc) {
  return doc.name();
}

var currTab = Application('Google Chrome').windows[0].activeTab;

getCurrTabTitle(currTab);
```

#### chrome.currtab.full.url

This captures the current tab in Chrome's URL.

**Content:** JavaScript
**Label:** `chrome.currtab.full.url`
**Abbreviation:** `chromeurl;`

```js
function getCurrTabLink(doc) {
  return doc.url();
}

var currTab = Application('Google Chrome').windows[0].activeTab;

getCurrTabLink(currTab);
```

#### md:chrome.currtab.link

This uses the previous two snippets to compose the current tab in Chrome in Markdown link format.

**Content:** Plain Text
**Label:** `md:chrome.currtab.link`
**Abbreviation:** `link;`

```js
[%snippet:chrometitle;%](%snippet:chromeurl;%)
```
