export const convertToTimestamp = (dateString: any) => {
    const date = new Date(dateString);
    const timestamp = Math.floor(date.getTime() / 1000);
    return timestamp;
};


export const convertToDateString = (timestamp: any) => {
    const date = new Date(timestamp * 1000);
    const dateString = date.toISOString();
    return dateString;
};