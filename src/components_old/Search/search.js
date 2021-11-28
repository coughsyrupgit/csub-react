const doesItemMatch = (searchExp, item) => item.title.match(searchExp) || (item.url && item.url.match(searchExp));

const getMatchedItems = (searchExp, items) => items.filter(doesItemMatch.bind(this, searchExp));

export default {
    getResults(folders, searchQuery) {
        const queryExp = new RegExp(searchQuery, 'i');

        return folders.reduce((result, folder) => {
            const doesFolderMatch = doesItemMatch(queryExp, folder);
            const matchedLinks = getMatchedItems(queryExp, folder.links);

            if (matchedLinks.length) {
                result.push({...folder, links: matchedLinks})
            } else {
                if (doesFolderMatch) {
                    result.push(folder)
                }
            }

            return result
        }, []);
    }
}
