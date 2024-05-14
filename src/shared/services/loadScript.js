export const addScript = ({ src, id, onLoad }) => {
    const existing = document.getElementById(id);
    if (existing) {
        return existing;
    } else {
        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.async = false;
        script.onload = onLoad;
        document.body.appendChild(script);
        return script;
    }
};

export const removeScript = ({ id }) => {
    const script = document.getElementById(id);
    if (script) {
        document.body.removeChild(script);
    }
};