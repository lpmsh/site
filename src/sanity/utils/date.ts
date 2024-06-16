export function getPostDate(date: string) {
    const dateObj = new Date();
    const pieces = date.split("-").map((str) => parseInt(str));

    dateObj.setFullYear(pieces[0], pieces[1] - 1, pieces[2]);

    return dateObj;
}
