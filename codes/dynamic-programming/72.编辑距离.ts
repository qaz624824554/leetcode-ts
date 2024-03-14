
function minDistance(word1: string, word2: string): number {
    const dp = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(0))

    for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
    for (let j = 0; j <= word2.length; j++) dp[0][j] = j;

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            // 相等，无须做任何操作
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } 
            // 不相等，从 word1 的前 i - 1 个字符和 word2 的前 j 个字符（删除操作），
            // 或者从 word1 的前 i 个字符和 word2 的前 j - 1 个字符（插入操作），
            // 或者从 word1 的前 i - 1 个字符和 word2 的前 j - 1 个字符（替换操作）中选择一个进行操作
            else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    return dp[word1.length][word2.length];
};