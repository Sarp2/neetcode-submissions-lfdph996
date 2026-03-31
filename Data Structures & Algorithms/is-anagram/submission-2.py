class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Check if two string has the same length
        if len(s) != len(t):
            # If it is not, return False
            return False


        # create list from s
        chars = [char for char in s]

        for i in range(len(t)):
            # check if letter in t is in chars:
            if t[i] in chars:
                # If it is, remove it from char
                chars.remove(t[i])
            else:
                # If it is not, return false
                return False
        return True
        