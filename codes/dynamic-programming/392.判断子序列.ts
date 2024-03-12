function isSubsequence(s: string, t: string): boolean {
	// s 中前 i 个字符，t 中前 j 个字符是否存在子序列
	const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(false));

	// 前 0 个 s 的字符为子序列
	for (let i = 0; i <= t.length; i++) {
		dp[0][i] = true;
	}

	for (let i = 1; i <= s.length; i++) {
		for (let j = 1; j <= t.length; j++) {
			// 当前字符相等，如果上一个字符相等，则继续相等
			if (s[i - 1] === t[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				// 不相等，看前 j - 1个字符
				dp[i][j] = dp[i][j - 1];
			}
		}
	}

	return dp[s.length][t.length];
}
