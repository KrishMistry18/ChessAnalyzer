import { withSentryConfig } from "@sentry/nextjs";
import { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  output: phase === PHASE_PRODUCTION_BUILD ? "export" : undefined,
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  headers:
    phase === PHASE_PRODUCTION_BUILD
      ? undefined
      : async () => [
          {
            source: "/",
            headers: [
              {
                key: "Cross-Origin-Embedder-Policy",
                value: "require-corp",
              },
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin",
              },
            ],
          },
          {
            source: "/engines/:blob*",
            headers: [
              {
                key: "Cross-Origin-Embedder-Policy",
                value: "require-corp",
              },
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin",
              },
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
              },
              {
                key: "Age",
                value: "181921",
              },
            ],
          },
          {
            source: "/play",
            headers: [
              {
                key: "Cross-Origin-Embedder-Policy",
                value: "require-corp",
              },
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin",
              },
            ],
          },
          {
            source: "/database",
            headers: [
              {
                key: "Cross-Origin-Embedder-Policy",
                value: "require-corp",
              },
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin",
              },
            ],
          },
        ],
});

const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN;
const sentryOrg = process.env.SENTRY_ORG;
const sentryEnabled = !!sentryAuthToken && !!sentryOrg;

export default withSentryConfig(nextConfig, {
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  org: sentryOrg,
  project: "javascript-nextjs",
  authToken: sentryAuthToken,
  widenClientFileUpload: sentryEnabled,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  sourcemaps: {
    disable: !sentryEnabled,
    deleteSourcemapsAfterUpload: true,
  },
  release: {
    create: sentryEnabled,
    finalize: sentryEnabled,
  },
  telemetry: false,
});
