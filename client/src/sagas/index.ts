// import todosWatchers from './todos'
// import commentsWatchers from './comments'
import initialSetup from './init'
import * as _ from 'lodash'

type watcherT = () => void

function runWatchers(watchers: watcherT[]) {
  return _.values(watchers).map(watcher => watcher())
}

export default function* rootSaga() {
  yield [
    initialSetup(),
    // ...runWatchers(todosWatchers),
    // ...runWatchers(commentsWatchers)
  ]
}
