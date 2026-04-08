#!/bin/bash
set -e

echo "=== Netlify Build Debug Info ==="
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "=== End Debug Info ==="

echo "Installing dependencies..."
npm ci

echo "Building project..."
npm run build

echo "Build complete!"
