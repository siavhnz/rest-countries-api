export const guardCountryData = (item) => {
    let name = "",
        nativeName = "",
        capital = "",
        flag = "",
        tld = "",
        currencies = [],
        languages = [];

    if(item.name &&
        (item.name.common || item.name.official)) {
            name = item.name.common ? item.name.common : item.official;
        }

    if(item.name &&
        (item.name.official || item.name.common)) {
            nativeName = item.name.official ? item.name.official : item.common;
        }

    if(item.capital && item.capital.length > 0){
        capital = item.capital[0];
    }

    if(item.flags && (item.flags.png || item.flags.svg)){
        flag = item.flags.svg ? item.flags.svg : item.flags.png;
    }

    if(item.tld && item.tld[0]) {
        tld = item.tld[0];
    }

    if(item.currencies){
        for(const [key] of Object.entries(item.currencies)) {
           currencies.push(item.currencies[key].name)
        }
    }

    if(item.languages) {
        languages = Object.values(item.languages);
    }

    return {
        name,
        nativeName,
        capital,
        flag,
        population: item.population,
        region: item.region,
        subregion: item.subregion,
        tld,
        currencies,
        languages,
        borders: item.borders || []
    }
}