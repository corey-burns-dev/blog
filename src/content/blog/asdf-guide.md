---
title: "One Version to Rule Them All: The Ultimate asdf Guide"
pubDate: 2026-02-12
description: "Master asdf version manager for Node.js, Python, Bun, and pnpm. Learn how to install and manage multiple runtimes with this comprehensive developer guide."
keywords: "asdf, version manager, Node.js, Python, Bun, pnpm, corepack, developer tools, guide"
heroImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop"
---

If you've been in development for more than a week, you've probably hit "version hell." One project needs Node 18, another needs Node 20, and that one legacy script your coworker wrote back in 2019 requires Node 12 (and a prayer).

You could use `nvm` for Node, `pyenv` for Python, and `rbenv` for Ruby... or you could stop the madness and use **asdf**. It’s the Swiss Army knife of version managers.

## Step 1: Installation

First things first, we need to get asdf onto your machine. We’re going to clone the latest version directly from the source. It’s like farm-to-table, but for your CLI.

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.18.0
```

## Step 2: Teaching Your Shell to Speak asdf

Now that asdf is sitting in your home directory, we need to make sure your shell actually knows it exists. Depending on your flavor of choice, add these lines to your config file:

### For the Bash Traditionalists
Add this to your `~/.bashrc`:

```bash
. "$HOME/.asdf/asdf.sh"
. "$HOME/.asdf/completions/asdf.bash"
```

### For the Zsh Power Users
Add this to your `~/.zshrc`:

```zsh
. "$HOME/.asdf/asdf.sh"
```

### For the Fish Futurists
Add this to `~/.config/fish/config.fish`:

```fish
source ~/.asdf/asdf.fish
```

*Don't forget to restart your terminal or source your config file to apply the changes!*

## Step 3: Collecting Runtimes Like Pokémon

This is where the fun begins. asdf uses a plugin system. Want Node? Add the plugin. Want Bun? Add the plugin. Want to feel like a wizard? Add them all.

### Installing Node.js (and its buddies npm/npx)
Node is the bread and butter. Let's get it set up using the modern `asdf set` syntax:

```bash
# Add the plugin
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# Install the latest version
asdf install nodejs latest

# Set it as your global default (the -u flag stands for "user")
asdf set -u nodejs latest
```

### Getting Bun (The Speed Demon)
If you haven't tried Bun yet, you're missing out on some serious velocity.

```bash
asdf plugin add bun
asdf install bun latest
asdf set -u bun latest
```

### Adding pnpm (Because storage is expensive)
pnpm is the efficient cousin of npm that we all secretly prefer. While you can use an asdf plugin, the modern way is to use Node's built-in `corepack`:

```bash
# Enable corepack
corepack enable

# Prepare and activate the latest pnpm
corepack prepare pnpm@latest --activate

# Now you can use pnpm and pnpm dlx
pnpm --version
pnpm dlx clear-npx-cache
```

## Why This Rocks

The beauty of asdf isn't just that it manages everything; it's the `.tool-versions` file. You can drop a file into any project folder, list your versions, or use the new `asdf set <plugin> <version>` command to create one locally for that folder.

```text
# Example .tool-versions file
nodejs 25.6.1
bun 1.3.9
pnpm 10.29.3
```

No more manual switching. No more "it works on my machine." Just pure, unadulterated developer bliss. 

Go forth and version responsibly!
