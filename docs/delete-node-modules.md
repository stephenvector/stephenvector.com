---
title: How To Delete All Of Your `node_modules` Directories
---

# How To Delete All Of Your `node_modules` Directories

Be careful with this!

To list them all without deleting them all:

```
find . -name "node_modules" -type d -prune
```

To _delete_ them all:

```
find . -name "node_modules" -type d -prune -print -exec rm -rf '{}' +;
```

What the command means:

- `-type d` Directories only
- `-prune` Don't descend into a folder if it matches (if the folder is node_modules)
- `-exec rm -rf '{}' +;` Remove all the directories that we find
