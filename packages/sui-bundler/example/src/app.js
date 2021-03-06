/* eslint-disable no-console */
import {render} from 'react-dom'
import Hello from './hello'

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

render(<Hello />, document.getElementById('root'))
