import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default defineEventHandler(async (event) => {
  const markdown = `---
title: Page
description: This is the markdown page
---

# Markdown Content

\`\`\`typescript
const name: string = 'Marty McFly'
\`\`\`
`

  return parseMarkdown(markdown)
})
