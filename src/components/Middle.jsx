import Tweet from "./Tweet.jsx"
import CreateTweet from "./CreateTweet.jsx"

function Middle({ loggedInUser, addTweet, createTweetContent, setCreateTweetContent, tweets }) {
    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet
                loggedInUser={loggedInUser}
                addTweet={addTweet}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
            />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => (
                <Tweet key={index} tweet={tweet} />
            ))}
        </main>
    )
}

export default Middle
