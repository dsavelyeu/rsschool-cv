# Dzmitry Savelyeu

### Field Service Engineer "Medical Equipment"

- **Graduated:** Belarusian State University of Informatics and Radioelectronics

---

## _My first try of codewars:_

> **The Task is:**
> An isogram is a word that has no repeating letters, consecutive or non-consecutive.
> Implement a function that determines whether a string that contains only letters is an isogram.
> Assume the empty string is an isogram. Ignore letter case.

> - Example: (Input -plugin-> Output)
>   - "Dermatoglyphics" --> true
>   - "aba" --> false
>   - "moOse" --> false (ignore letter case)

```
function isIsogram(str) {
   let count = 0;
   let result = false;
    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < str.length; j++) {

            if (str[i].toUpperCase() == str[j].toUpperCase()) {
                count ++;
            }
        }
    }
    count = count / str.length;

    if (count > 1) {
        result = false;
    } else {
        result = true;
    }

    return result;
}

isIsogram('moOse');
```

---

Visit My GitHub: https://github.com/dsavelyeu/
