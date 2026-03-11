#!/bin/bash
# Usage: notify-tufail-complete.sh "task" "files" "tokens" "commit" "build" "vercel"
TASK=$1
FILES=$2
TOKENS=$3
COMMIT=$4
BUILD=$5
VERCEL=$6

cat > /tmp/tufail-notify.txt << MSG
✅ Tufail: $TASK
Files: $FILES
Tokens: $TOKENS
Commit: $COMMIT
Build: $BUILD
Vercel: $VERCEL
MSG

~/ds-playground/scripts/notify-slack.sh "$(cat /tmp/tufail-notify.txt)"
