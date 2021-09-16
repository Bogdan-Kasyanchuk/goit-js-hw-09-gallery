import { fnChange } from './change.js'

export const fnDelegation = (event) => {
  fnChange(event.target.dataset.source, event.target.alt)
}
