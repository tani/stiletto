import { parse as parseCss } from 'css'
import { selectAll } from 'css-select'
import render from 'dom-serializer'
import { parseDocument } from 'htmlparser2'

export function inline(html: string, css: string): string {
  const document = parseDocument(html) as any
  const { stylesheet } = parseCss(css)
  for (const rule of stylesheet?.rules ?? []) {
    if ("selectors" in rule) {
      for (const selector of rule.selectors ?? []) {
        const elements = selectAll(selector, document)
        for (const element of elements) {
          for (const declaration of rule.declarations ?? []) {
            if ("property" in declaration) {
              element.attribs.style ??= ""
              if (/[^;]\s*$/.test(element.attribs.style)) {
                element.attribs.style += ";"
              }
              element.attribs.style += `${declaration.property}:${declaration.value};`
            }
          }
        }
      }
    }
  }
  return render(document)
}
