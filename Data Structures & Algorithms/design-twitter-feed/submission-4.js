class Twitter {
    tweets = new Map();
    follows = new Map();
    time = 0;
    constructor() {}

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push({ tweetId, time: this.time++ });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const ownTweets = this.tweets.get(userId) ?? [];
        const followerTweets = (this.follows.get(userId) ?? [])
            .filter((id) => id !== userId)
            .flatMap((id) => this.tweets.get(id) ?? []);
        
        return [...ownTweets, ...followerTweets]
            .sort((a, b) => b.time - a.time)
            .splice(0, 10)
            .map((tweet) => tweet.tweetId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, []);
        }

        if (this.follows.get(followerId).includes(followeeId)) return;
        this.follows.set(followerId, [...this.follows.get(followerId), followeeId]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, []);
        }

        if (!this.follows.get(followerId).includes(followeeId)) return;
        this.follows.set(followerId, this.follows.get(followerId).filter((id) => id !== followeeId));

    }
}
