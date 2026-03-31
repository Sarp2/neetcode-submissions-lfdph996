from math import prod

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        lst = []
        result = []

        for i, n in enumerate(nums):
            current_lst = []
            for num in nums:
                current_lst.append(num)

            current_lst.pop(i)
            lst.append((n, current_lst))

            result.append(math.prod(lst[i][1]))

        return result