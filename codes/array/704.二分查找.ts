function search(nums: number[], target: number): number {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target < nums[mid]) {
            high = mid -1;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};