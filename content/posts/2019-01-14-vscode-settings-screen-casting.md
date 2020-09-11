---
title: VS Code Settings for Sharing Better Screencasts & Demos
description: >-
  Settings that I have found are best for optimizing VS Code for sharing code
  through screencasts and demos
date: 2019-01-14T00:00:00.000Z
aliases:
  - /2019/vscode-settings-screen-casting/
  - /2019/2019-01-14-vscode-settings-screen-casting/
  - /vscode-settings-screen-casting/
tags:
  - VS Code
  - Screencasting
permalink: /posts/vscode-settings-screen-casting/
type: post
status: published
---



I've been using VS Code for the past year in my development workflow and recently started recording more screencasts and demos.

I've also started experimenting with tweaking settings to find VS Code settings to make the videos and demos I create clear and easy to follow. **The goal is to reduce the visual clutter as much as possible so that the code I'm showing (or writing or demoing) can be shown without any distraction.**

Below are the settings I use when recording videos. I recommend them to anyone presenting code through video or live demos.

## Screenshots

Since this brief post is about the visual changes of VS Code, here are some screenshots showing the difference. In these screenshots I've used a simple Go file from my `dotfiles`.

### Before Changing Settings

![VS Code preview before adding settings for better screencasts and demos](/img/before-vs-code-sharing-settings.png)

### After Changing Settings (with Terminal)

![VS Code preview after adding settings (with terminal open) for better screencasts and demos](/img/after-vs-code-sharing-settings-with-terminal.png)

### After Changing Settings

![VS Code preview after adding settings (without terminal open) for better screencasts and demos](/img/after-vs-code-sharing-settings-without-terminal.png)

## VS Code Settings

### Non-JSON Settings

#### Disable the Sidebar

Unless you're exploring code for the sake of showing hierarchy, in my opinion, there's no good reason for having the Sidebar open, so I use **⌘ + B** to hide it.

### JSON Settings

To achieve the same effects, add the following key/value pairs to your `settings.json` file (You can access this file by opening the Command Palette (⌘+Shift+P) and typing **Preferences: Open Keyboard Shortcuts (JSON)**):

```json
{
  "workbench.activityBar.visible": false,
  "window.zoomLevel": 2,
  "workbench.statusBar.visible": false,
  "editor.lineNumbers": "off",
  "gitlens.currentLine.enabled": false,
  "scm.diffDecorations": "none",
  "editor.minimap.enabled": false
}
```

Below is a brief explanation for each setting and why I've chosen it.

### Disable Activity Bar

**setting:** `"workbench.activityBar.visible": false,`

This setting disables the **VS Code Activity Bar**. It's a very prominent visual feature of VS Code and can be very distracting.

#### Exceptions

- demoing a full workflow

### Zoom Level

**setting:** `"window.zoomLevel": 2,`

Increasing the size of your code is by far the number one request I hear _during_ presentations. A **Zoom Level** of 2 (based on a **Font Size** of 12) is a good setting to make sure that what you're presenting is visible for attendees/viewers. It's also not so big that it's unmanageable for navigating when you're presenting. One thing to remember is that code should probably adhere to not extending past the 80 character length per line.

### Disable Status Bar

**setting:** `"workbench.statusBar.visible": false,`

The VS Code Status Bar (the bar that extends across the bottom of the window. It contains information about git, where you are in the file, the type of file, etc) is useful for development, but can be very distracting because it's _constantly_ changing if you're typing or navigating. The information it contains is rarely useful for presentation for you or for your audience.

### Disable Diff Decorations

**setting:** `"scm.diffDecorations": "none",`

When working out of a project under version control, you'll see blue, green and a red arrow in the "gutter". This can be distracting when typing, so disabling it allows you to focus on the code, especially if you're writing code as you present.

### Disable Line Numbers

**setting:** `"editor.lineNumbers": "off",`

Line numbers are rarely useful during demos and any reference to a line number can be replaced by highlighting with a cursor as you present the information.

### Disable Minimap

**setting:** `"editor.minimap.enabled": false`

The minimap doesn't add any contextual value other than where you are in a large file, which is very rarely relevant (if you need to know where you are, consider re-enabling line numbers).

### Disable Current Line GitLens

**setting:** `"gitlens.currentLine.enabled": false,`

Knowing who changed what and when for the current line doesn't add a lot of value to a demo.

#### Exceptions

- When you want to show how to investigate changes for context

### Disable Indent Guides

**setting:** `"editor.renderIndentGuides": false`

## A Final Note on Settings

These are the settings I've found work for me, but "works for me" is purely anecdotal! I recommend trying out the configuration I suggested and changing your settings until you find what works for you. If you find something you think would be useful for me, please let me know on [twitter at @chaseadamsio](https://twitter.com/chaseadamsio).
