import React, { useState, useEffect } from "react"
import Signup from "./Signup"
import Chat from "./Chat"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./context"


function App() {

  return (

    <div >
      <Router>
        <AuthProvider>
          <Switch>

            <Route exact path="/" component={Signup} />
            <Route path='/chats' component={Chat} />

          </Switch>
        </AuthProvider>
      </Router>
    </div>

  )
}

export default App