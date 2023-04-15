function waitForComments(element) {
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            if (document.querySelector(element)) {
                clearInterval(intervalId);
                resolve();
            }
        }, 500);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

waitForComments("#comments #header-author").then(async () => {
    console.log("Comments are loaded")
    
    // Wait so that all the comment images are loaded
    await sleep(500)

    var images = document.getElementsByTagName('img')
    while(images.length > 0) {
        images[0].parentNode.removeChild(images[0])
    }
});
