export function createElement({ tagName, className = '', attributes = {} }) {
    const elem = document.createElement(tagName);

    if (className) {
        const classNames = className.split(' ').filter(Boolean); // Include only not empty className values after the splitting
        elem.classList.add(...classNames);
    }

    Object.keys(attributes).forEach((key) =>
        elem.setAttribute(key, attributes[key])
    );

    return elem;
}
