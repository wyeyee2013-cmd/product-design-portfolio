import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Serves api/ask.js during `vite dev`.
 *
 * In production the host runs that file as a serverless function; the dev
 * server would otherwise 404 it and the ask box would silently fall back to
 * the offline knowledge base — which looks like it works, so the real thing
 * would never get tested locally. This runs the same handler against Vite's
 * connect middleware, which already speaks the Node req/res the handler wants.
 */
function devApi(env) {
  return {
    name: 'dev-api',
    configureServer(server) {
      server.middlewares.use('/api/ask', async (req, res, next) => {
        if (req.method !== 'POST') return next()
        try {
          let raw = ''
          for await (const chunk of req) raw += chunk
          req.body = raw ? JSON.parse(raw) : {}

          /* the dev server does not export .env into process.env by default */
          if (env.ANTHROPIC_API_KEY) process.env.ANTHROPIC_API_KEY ||= env.ANTHROPIC_API_KEY
          if (env.ASK_MODEL) process.env.ASK_MODEL ||= env.ASK_MODEL

          /* shim the two Express-isms the handler uses */
          res.status = (code) => {
            res.statusCode = code
            return res
          }
          res.json = (payload) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(payload))
            return res
          }

          const { default: handler } = await server.ssrLoadModule('/api/ask.js')
          await handler(req, res)
        } catch (error) {
          server.config.logger.error(`[dev-api] ${error?.stack || error}`)
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'dev api failed' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), devApi(env)],
    /* esbuild's css minifier reads `backdrop-filter` and its -webkit- twin as
       one property declared twice and keeps only the last, which silently
       dropped the standard property from every glass surface — no blur in
       Firefox at all. lightningcss understands prefixes properly and emits
       both from a single unprefixed source declaration. */
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: { chrome: 87 << 16, edge: 88 << 16, firefox: 103 << 16, safari: 14 << 16 },
      },
    },
    build: { cssMinify: 'lightningcss' },
  }
})
