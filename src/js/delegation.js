import { fnChange } from './gallery'

export const fnDelegation = (event) => {
  fnChange(event.target.dataset.source, event.target.alt)
}
