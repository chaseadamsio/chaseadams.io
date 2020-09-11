---
title: "Git Commands"
description: "A list of helpful git commands"
date: 2018-11-07
permalink: /git-useful-commands/
aliases:
    - git/commands
---

I use `git` on a daily basis and this is a list of commands that I use frequently or _infrequently_ enough to need a reminder of how to do them.

## Branch

| Action                | Command                    |
|:----------------------|:---------------------------|
| rename current branch | `git branch -m <new name>` |

## Stash

| Action                                             | Command                                               |
|:---------------------------------------------------|:------------------------------------------------------|
| diff latest stash against current branch           | `git stash show -p`                                   |
| diff specific stash against current branch         | `git stash show -p stash@{<StashNumber>}`             |
| show only the filenames of a stash                 | `git stash show --name-only stash@{<StashNumber>}`    |
| only apply changes from a specific file in a stash | `git checkout stash@{<StashNumber} -- <path/to/file>` |

## Spelunking

I call it "spelunking" because a lot of times I find myself digging through the history of code.

| Action                                               | Command                              |
|:-----------------------------------------------------|:-------------------------------------|
| Find commits where a line changed in a specific file | `git log -S <string> <path/to/file>` |
