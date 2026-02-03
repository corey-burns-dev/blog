#!/usr/bin/env sh
set -euo pipefail

# Updates package.json dependency ranges to the latest versions using
# npm-check-updates, then installs with Bun.

if ! command -v bun >/dev/null 2>&1; then
  echo "bun not found. Install bun: https://bun.sh" >&2
  exit 1
fi

echo "Updating package.json to latest dependency versions (npm-check-updates)..."
bunx npm-check-updates -u

echo "Installing updated dependencies with bun..."
bun install

echo "Update complete. Review changed package.json and lock files, then run tests."
