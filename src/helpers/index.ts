export function getAuthorNameAndEmail(author: string): {
    name: string;
    email: string;
} {
    const nameRegex = /^[^\s<]+/;
    const emailRegex = /<([^>]+)>/;
    const nameMatch = nameRegex.exec(author);
    const emailMatch = emailRegex.exec(author);

    let name = "";
    let email = "";

    if (nameMatch && nameMatch.length > 0) {
        name = nameMatch[0];
    }

    if (emailMatch && emailMatch.length > 1) {
        email = emailMatch[1];
    }

    return {
        name,
        email,
    };
}
