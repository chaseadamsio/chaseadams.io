---
title: Getting Started With Emacs
date: 2017-01-05T00:00:00.000Z
description: Curious about Emacs? Read about my journey with it.
tags:
  - Emacs
aliases:
  - /2017/getting-started-emacs/
  - /2017/2017-01-05-getting-started-emacs/
  - /getting-started-with-emacs/
permalink: /posts/getting-started-with-emacs/
type: post
status: published
---



**I have been using Emacs for a month (as of this post) and it would be a Hurculean task for any other editor to pull me away from it!**

At the beginning of December 2016, I joined a new team at WalmartLabs writing Go to optimize the request/response lifecycle. I was having a conversation with one of my new teammates ([Shane Hansen, who's an awesome go developer](https://www.whitane.com/)) about which editors we used.

**I used Vim. He used Emacs.**

I'd been using Vim for over 4 years religiously and that was the moment that I realized that he was the _first emacs user I've ever met_. It led me to ask, "why have I never given Emacs a try?"

That night I googled "Emacs" and started my journey down the rabbit hole and haven't come back out of it since...in fact, I've given up on considering other editors because **Emacs is the best editor for me.**

![A Screenshot of My Emacs Editor](/img/emacs.png)

Why I'm using Emacs

I've tried a number of editors (Coda, Sublime, Atom, VSCode and clearly Vim) but have never been able to leave vim because I always felt so darn productive using it.

Even though I knew I'd be sacrificing my initial productivity, there were a few major reasons I was willing to try out Emacs:

- Emacs has been around since the mid-1970s and **still** has a group of people who are contributing to it heavily...and it does stuff none of the other editors I've used can do.
- Learning lisp is different, but Emacs lisp makes the editor itself incredibly powerful and flexible.
- It's self-documenting. If you want to know what a particular keybinding does, you can type a help command that'll prompt you to type the keybinding and then it'll show you the docs for whatever method it's bound to. How neat is that?
- **Org-mode. Org-mode. Org-mode.** This is going to get its own blog post, but org mode the most amazing feature of any editor I've ever used. It's a way to write todo lists. It's a way to keep an agenda in your editor. To capture todos. To capture notes. To capture anything your heart desires...from anywhere in your editor, quickly. It's a way to practice literate programming (rather than write code and document with comments, you write the documentation in a `*.org` file and you can run the code _from_ the file or "tangle" it into its own file, such as a shell script...it's really just amazing). **Org-mode itself has been the most valuable reason for me to learn Emacs.**

and one minor reason...

- **It's not written in Javascript.** I debated whether I should bring this up, but I don't think Javascript is the right language for an editor. I get better IO response from keystrokes (no visual lag) on Emacs in a VM than I do in Atom or VSCode on my host machine. I'll always love Javascipt, I just don't love it as the core language of my editor.

## If You're Considering Giving Emacs a Shot...

Here's some advice I'd like to give you if you're willing to try out Emacs:

- **Go into it with an open mind.** Everything new is scary. It's easy to justify not putting time into it by saying "this is scary" or "this is stupid" or "I don't have time for this". I'm not saying you _should learn emacs_, but I am saying that if you're choosing to invest time in it, give it a fair shake.
- **Go through the Emacs tutorial.** Learning the keybindings and functionality of Emacs is one of the most critical steps to success.
- **Wait to install plugins.** I know the white background is probably jarring, especially if you're using a dark theme in your current editor. There's so much out of the box that it can do and if you've gone through the tutorial, chances are you're getting a good chunk of what your current editor gives you. If you need things to write go or javascript, you can install plugins, but it's good to get a feel for the editor before installing stuff you may not need.
- **If you're coming from vim & your keybindings are a deal breaker, install evil-mode.** I use vim keybindings everywhere, so I installed evil-mode and found that it provided 100% of what I used in vim, which is a pretty awesome testament to whoever wrote `evil-mode`. Most vim keybinding extensions for other editors are missing basic features that made it hard to use for me.
- **If you use evil-mode...eventually try using Emacs without it.** I disabled `evil-mode` because I wanted to give the keybindings in Emacs a fair shake too, and they're not so bad! I've been using Emacs without `evil-mode` productively for almost two weeks now.
- **Check out [Sacha Chua's: How to Learn Emacs](https://sachachua.com/blog/2013/05/how-to-learn-emacs-a-hand-drawn-one-pager-for-beginners/) visual tutorials.** Pretty much every sub-rabbit hole I've gone down in Emacs has either started or ended with something from Sacha's blog, it's a /gold mine/ of information for learning Emacs.
- **Read the docs for org-mode.** Seriously, I can't convey how awesome org-mode is in this single post, but I'm hoping to churn out a bunch of new content explaining in a systematic way how to use org-mode to be a more effective engineer. Check out the [org-mode docs here](https://orgmode.org/)
- **Check out my emacs dotfiles.** All of my dotfiles are now org files that are either tangled or executed from my [dotfiles](https://github.com/chaseadamsio/dotfiles) directory. You can checkout my [emacs config](https://github.com/chaseadamsio/dotfiles/blob/master/emacs.org) which is loaded from my [`init.el` that's tangled from my bootstrap.org](https://github.com/chaseadamsio/dotfiles/blob/master/bootstrap.org) ]] or read through my [osx-defaults which are executed from emacs to setup a new OSX environment](https://github.com/chaseadamsio/dotfiles/blob/master/osx-defaults.org). Did I mention how much I love `org-mode`?
