# tlock-js bug in test with cloudflare/vitest

reproduction:

```bash
pnpm i
pnpm test
```

But works when running as worker:

```
pnpm dev
# navigate to http://localhost:8787/roundAt/1729873909000
```
