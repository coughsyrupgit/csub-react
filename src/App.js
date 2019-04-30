import React from 'react'
import './App.css'
import 'uikit/dist/css/uikit-core.css'
import Grid from './components/Grid'

function App() {
  var test = [
      {
          url: "#",
          title: "Title 1"
      },
      {
          url: "#",
          title: "Link 2"
      }
  ]
  return (
      <div className="uk-container uk-container-large">
          <h1 className="uk-heading-line uk-margin-top uk-margin-medium-bottom"><span>My Bookmarks</span></h1>
          <Grid items={[{
              title: "Card 1",
              links: test
          },
          {
              title: "Card 2",
              links: test
          },
          {
              title: "Card 3",
              links: test
          }
          ]} />
      </div>
  )
}

export default App;
