class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # Create a dictionary to count how many times number occured
        dic = {}

        for i in range(len(nums)):
            # Check if number is in the dic
            if nums[i] in dic:
                # If it is, increase the value by one
                dic[nums[i]] += 1
            else:
                # If it is, keep it as 1
                dic[nums[i]] = 1
        
        for num in nums:
            # Check if number in the dic occured at many times 
            if dic[num] > 1:
                # If it is, return true
                return True
        return False