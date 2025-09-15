import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components

import LeftSide from './components/LeftSide.jsx'
import Middle from './components/Middle.jsx'
import RightSide from './components/RightSide.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
        setCreateTweetContent('')
    }

    return (
        <div className="container">
            <LeftSide loggedInUser={loggedInUser} />
            <Middle
                loggedInUser={loggedInUser}
                addTweet={addTweet}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
                tweets={tweets}
            />
            <RightSide />
        </div>
    )
}

export default App
