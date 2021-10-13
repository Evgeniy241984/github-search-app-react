export function getDateTimeFromUTC(dt) {
    const date = new Date(dt);
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    return date.toLocaleString("en-US", options)
}