# CI/CD Setup

This project now includes:

- `CI`: runs on every push and pull request
  - `npm ci`
  - `npm run check`
  - `npm run build`
  - uploads the `dist` bundle as an artifact

- `CD`: runs on pushes to `main` or `master`, and also supports manual runs
  - builds a production Docker image
  - publishes the image to `ghcr.io/<owner>/<repo>`

## Notes

- If your default deployment branch is not `main` or `master`, update `.github/workflows/cd.yml`.
- The published container starts the app with `npm run start` on port `3000`.
- If you later deploy to Render, Railway, Fly.io, or another host, this Docker image is ready to use.
