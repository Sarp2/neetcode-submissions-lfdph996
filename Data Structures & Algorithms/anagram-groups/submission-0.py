class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Create a dictionary
        dic = {}

        for s in strs:
            # Sort the string and join as word
            sortedS = ''.join(sorted(s))

            # Check sorted string is in the dic
            if sortedS in dic:
                # If it is, skip the next one
                continue
            else:
                # If it is not, append empty list to key
                dic[sortedS] = []
            
        for s in strs:
            # Sort the string and join as word
            sortedS = ''.join(sorted(s))

            # Check if the sorted string is in the its key
            if sortedS in dic:
                # If it is, append it
                dic[sortedS].append(s)
        
        # Return all the values in dictionary as a list
        return list(dic.values())

        