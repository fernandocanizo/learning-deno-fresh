import type { PageProps } from "$fresh/server.ts"

export default function Greet(props: PageProps) {
  const url = new URLSearchParams(props.url.search)
  const ask = url.get("ask")
  const shouldNotAsk = !ask || ask === "false"

  return (
    <div>
      Hello {props.params.name}.&nbsp;
      {shouldNotAsk ? null : "How are you doing today?" }
    </div>
  )
}
