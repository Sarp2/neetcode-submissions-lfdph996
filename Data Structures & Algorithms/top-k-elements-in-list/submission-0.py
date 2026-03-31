class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Create a dictionary to collect frequency as value and number as a key
        dic = {}
        
        # Create a list to collect the result
        result = []

        # iterate each number and count the frequency
        for n in nums:
            if n in dic:
                dic[n] += 1
            else:
                dic[n] = 1
        
        # Create a while loop until k becomes none
        while k != 0:
            # get most frequent number as a key
            n = max(dic, key=dic.get)

            # make the value as 0 zero
            dic[n] = 0
            
            # append the number to list
            result.append(n)

            # decrease k by one
            k -= 1
        
        return result


        