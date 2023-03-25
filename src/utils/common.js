export function copy (value) {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', value)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
  }
  document.body.removeChild(input)
}
