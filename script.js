function randomInterval(func, minInterval, maxInterval) {
    let timeout;

    const run = () => {
        const interval = Math.random() * (maxInterval - minInterval) + minInterval;
        timeout = setTimeout(() => {
        func();
        run();
        }, interval);
    };

    run();

    return {
        cancel: () => clearTimeout(timeout)
    };
}

const interval = randomInterval(() => {
    console.log("This will be logged at random intervals");
}, 1000, 60000);



const container = document.getElementById("img-container");
const fire = document.getElementById("fire");
const sisyphus = document.getElementById("sisyphus");

const links = document.getElementsByClassName("inline-link"); 


container.addEventListener('click', function(event) {

    if (sisyphus.style.display === "none") {
        fire.style.display = "none";
        sisyphus.style.display = "block";
        for (const link of links) {
            link.style.color = "rgb(233, 75, 13)";
        }
        
    } 
    else {
        sisyphus.style.display = "none";
        fire.style.display = "block";

        
        for (const link of links) {
            link.style.color = "rgb(18, 106, 34)";
        }
    }

});


