import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { OutputSelector } from 'reselect'
import { StateAll } from '../ducks/models'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useMemoSelector = <R, C>(
  outputSelector: OutputSelector<StateAll, R, C>
) => {
  const memoSelector = useMemo(() => {
    return outputSelector
  }, [outputSelector])

  const result = useSelector((state: StateAll) => memoSelector(state))

  return result
}

export default useMemoSelector
