function numDistinct(s: string, t: string): number {
    // dp[i][j] 表示 s 字符串前 i 个字符，t 字符串前 j 个字符出现的个数
    const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(0));

    // 前 i 个字符，j 为 0 的 t 空串有 1 个
    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[s.length][t.length];
};