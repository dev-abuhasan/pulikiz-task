export const truncatedContent = ({ content, maxCharacters, tagsRemove }: any) => {
    const truncateContent = (text: any, maxLength: any) => {
        if (text?.length > maxLength) {
            return `${text.slice(0, maxLength)}...`;
        }
        return text;
    };

    const removeHTMLTags = (text: any) => {
        return text.replace(/<[^>]*>/g, '');
    };

    let truncatedContent = content;

    if (tagsRemove) {
        truncatedContent = removeHTMLTags(content);
    }

    truncatedContent = truncateContent(truncatedContent, maxCharacters);

    return truncatedContent;
};