#!/usr/bin/env bash
set -euo pipefail

bun install

if command -v vercel >/dev/null 2>&1; then
    VERCEL_CMD="vercel"
else
    VERCEL_CMD="bunx vercel@latest"
fi

VERCEL_ENVIRONMENT="${VERCEL_ENVIRONMENT:-development}"

if [ ! -f ".vercel/project.json" ] &&
    { [ -z "${VERCEL_PROJECT_ID:-}" ] || [ -z "${VERCEL_ORG_ID:-}" ]; } &&
    [ -n "${CONDUCTOR_ROOT_PATH:-}" ] &&
    [ -f "$CONDUCTOR_ROOT_PATH/.vercel/repo.json" ]; then
    VERCEL_PROJECT_ID="$(
        node -e '
const repo = require(process.argv[1]);
const project = repo.projects.find((entry) => entry.directory === ".") || repo.projects[0];
if (!project) process.exit(1);
process.stdout.write(project.id);
' "$CONDUCTOR_ROOT_PATH/.vercel/repo.json"
    )"
    VERCEL_ORG_ID="$(
        node -e '
const repo = require(process.argv[1]);
const project = repo.projects.find((entry) => entry.directory === ".") || repo.projects[0];
if (!project) process.exit(1);
process.stdout.write(project.orgId);
' "$CONDUCTOR_ROOT_PATH/.vercel/repo.json"
    )"
    export VERCEL_PROJECT_ID VERCEL_ORG_ID
fi

if ! $VERCEL_CMD env pull .env.local --environment="$VERCEL_ENVIRONMENT" --yes; then
    cat >&2 <<'EOF'
Failed to pull environment variables from Vercel.

Make sure the Vercel CLI is authenticated and the workspace can identify the
Vercel project, either through .vercel/project.json or VERCEL_PROJECT_ID and
VERCEL_ORG_ID.
EOF
    exit 1
fi
