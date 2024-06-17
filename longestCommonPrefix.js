function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    // Take the first string as the initial prefix
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];

        // Reduce the length of the prefix until it matches the beginning of the string str
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}
