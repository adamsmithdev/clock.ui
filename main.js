window.onload = () => {
    main();
};

const main = () => {
    setDate();
    setInterval(setTime, 1000);
};

const getDate = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();

    return `${month}/${day}/${year}`;
};

const getTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};

const setDate = () => {
    const date = getDate();
    const dateElement = document.getElementById('date');
    dateElement.textContent = date;
};

const setTime = () => {
    const time = getTime();
    const timeElement = document.getElementById('time');
    timeElement.textContent = time;
};
