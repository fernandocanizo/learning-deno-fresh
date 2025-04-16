import type { FreshContext } from "$fresh/server.ts"

import { Handlers, PageProps } from "$fresh/server.ts"

const names = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"]

type Data = {
  results: string[]
  query: string
}

export const handler: Handlers<Data> = {
  GET(req: Request, ctx: FreshContext) {
    const url = new URL(req.url)
    const query = url.searchParams.get("q")?.toLowerCase() ?? ""
    const results = names.filter(name => name.toLowerCase().includes(query))
    return ctx.render({ results, query })
  },
}

export default function Search({ data }: PageProps<Data>) {
  const { results, query } = data
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}
