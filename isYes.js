export default function isYes(str) {
    let answer = str.toLowerCase();
    if (answer === 'yes' || answer === 'y' || answer === 'ya') {
        return true;
    } else {
        return false;
    }
}