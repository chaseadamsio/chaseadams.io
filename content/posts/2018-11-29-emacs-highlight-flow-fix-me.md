---
title: 'Emacs: Highlight $FlowFixMe comments in JavaScript'
description: >-
  Learn how to setup conditional highlighting for Emacs by writing emacs-lisp to
  highlight $FlowFixMe
date: 2018-11-29T00:00:00.000Z
aliases:
  - /2018/emacs-highlight-flow-fix-me/
  - /2018/2018-11-29-emacs-highlight-flow-fix-me/
  - /emacs-highlight-flow-fix-me/
tags:
  - Emacs
  - JavaScript
  - FlowType
permalink: /posts/emacs-highlight-flow-fix-me/
type: post
status: published
---



I've been working with Flow a lot since joining Webflow and one of the things that I constantly miss is the `// $FlowFixMe` comments. I decided to highlight `// $FlowFixMe` comments in red so they stood out.

Emacs makes it trivial to add configuration to highlight specific lines based on certain criteria. In `init.el` or any file that you load configuration through, you can add the following:

```lisp
  (defface flow-fix-me-comment '((t (:foreground "#ff0000"))) "Red")

  (font-lock-add-keywords
   'js-mode '(("// $FlowFixMe" 0 'flow-fix-me-comment t)))
```

Breaking it down:

- `defface` allows us to declare a customizable `FACE` (you can think of `FACE` as a style). We're naming it `flow-fix-me-comment`
- `font-lock-add-keywords` allows us to highlight a mode based on a specific keyword.
- `'js-mode` is the mode we want to highlight on.
- `"// $FlowFixMe"` is the term we want to use as the criteria for highlighting.
- If the term matches the line, apply the `flow-fix-me-comment` `FACE`.

Make sure to `eval-buffer` on the snippet, reload your config or restart Emacs to see the changes take place.

The end result will look like this:

![Use Emacs to highlight $FlowFixMe in Javascript](/img/flowfixme.png)

If you're using Emacs to develop for JavaScript and using Flow in your projects, this is a great way to make sure you don't get burnt by any `$FlowFixMe` comments during development!
