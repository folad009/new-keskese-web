export function splitText(
  element: HTMLElement,
  type: 'chars' | 'words' = 'chars'
) {
  const text = element.textContent ?? ''
  element.innerHTML = ''

  const units =
    type === 'words'
      ? text.split(/(\s+)/) // keeps spaces
      : Array.from(text)

  const fragment = document.createDocumentFragment()
  const spans: HTMLSpanElement[] = []

  units.forEach((unit, i) => {
    const span = document.createElement('span')
    span.textContent = unit === " " ? "\u00A0" : unit
    span.style.display = 'inline-block'
    span.dataset.index = String(i)

    fragment.appendChild(span)
    spans.push(span)
  })

  element.appendChild(fragment)

  return spans
}