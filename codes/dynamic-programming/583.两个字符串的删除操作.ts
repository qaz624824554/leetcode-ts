function minDistance(word1: string, word2: string): number {
    // dp[i][j] 表示以 word1 的前 i 个，word2 的前 j 个所需的最小步骤
    const dp = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(0));

    // 初始化 dp[i][0] 和 dp[0][j]
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            // 相等，无须删除
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            // 不相等，从i-1或j-1中选一个删除，使步骤最小
            else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[word1.length][word2.length];
};