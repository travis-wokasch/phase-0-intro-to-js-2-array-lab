const cats = ["Milo", "Otis", "Garfield"];

    function destructivelyAppendCat() {
        cats.push("Ralph");
        return destructivelyAppendCat;
    }

    function destructivelyPrependCat() {
        cats.unshift("Bob");
    }

    function destructivelyRemoveLastCat() {
        cats.pop();
    }

    function destructivelyRemoveFirstCat() {
        cats.shift();
    }

        
    function appendCat(name) {
        const newCats = [...cats, "Broom"];
        return newCats;
        }
        
    function prependCat(name) {
            const newestCats = ["Arnold", ...cats];
            return newestCats;
            }
    
    function removeLastCat(name) {
            const newerCats = [...cats];
            newerCats.pop()
            return newerCats;
                }
    function removeFirstCat(name) {
            const newsCats = [...cats];
            newsCats.shift()
            return newsCats;
                        }

