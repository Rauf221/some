 let str1 = "god"
 let str2 = "dog"

 if (str1.length !== str2.length) {
    console.log("Anagram deyil" ) 
    return false;
 }

 let processedStr2 = str2.toLowerCase().split("").sort ().join("");
 let processedStr1 = str1.toLowerCase().split("").sort ().join("");

 if (processedStr2 == processedStr1) {
    console.log("Anagramdir")
 } else{
    console.log("Anagram deyil")
 }
