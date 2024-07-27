export const SwitchCase = (args: any) => {
    const { searchValue, Date, type, getData, getFiltered, loc } = args;
    if (searchValue === "" && Date === null && type === "" && loc === "") {
        console.log("ALL DATA")
        getData();
    } else if (Date !== null || type !== "" || searchValue !== "" || loc !== '') {
        console.log(Date, "casedate")
        console.log(type, "casetype")
        console.log(searchValue, "casesearc")
        getFiltered(Date, type, searchValue, loc)
    }
}