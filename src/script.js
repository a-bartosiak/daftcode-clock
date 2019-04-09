export default function () {

    const {body} = document;
    const clock = document.createElement('div');
    body.appendChild(clock);

    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours() % 12;

    function* secondsGenerator() {
        while (true) {
            yield seconds++;
        }
    }

    setInterval(() => {

        const generator = secondsGenerator();
        generator.next().value;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
                if (hours === 12) {
                    hours = 0;
                }
            }
        }
        clock.innerHTML = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
    }, 1000);

};
