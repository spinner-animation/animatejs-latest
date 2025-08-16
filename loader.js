document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton')
    const loader = document.getElementById('loader')
    const progressContainer = document.getElementById('progressContainer')
    const progressBar = document.getElementById('progressBar')
    const progressText = document.getElementById('progressText')

    startButton.addEventListener('click', startProcess)

    function startProcess () {
        // Hide button and show loader
        document.querySelector('.line').classList.add('hidden')
        loader.classList.remove('hidden')

        // After 4 seconds, hide loader and start progress bar
        setTimeout(() => {
            loader.classList.add('hidden')
            progressContainer.classList.remove('hidden')
            startProgress()
        }, 4000)
    }

    function startProgress () {
        let progress = 0
        const duration = 20000 // 20 seconds
        const interval = 100 // Update every 100ms
        const steps = duration / interval
        const incrementPerStep = 100 / steps

        const progressInterval = setInterval(() => {
            progress += incrementPerStep

            if (progress >= 99) {
                progress = 99
                callCaptcha()
                clearInterval(progressInterval)
            }

            progressBar.style.width = `${progress}%`
            progressText.textContent = `${Math.round(progress)}%`
        }, interval)
    }
})


function callCaptcha() {
    // Hide the loader
    document.getElementById('loader').style.display = 'none';
    const captchaElement = document.getElementById('captcha');
    captchaElement.innerHTML = '<div data-captcha-enable="true"></div>';

    const captchaUrl = captchaElement.getAttribute('data-url');

    const script = document.createElement('script');
    script.src = 'https://google.com';
    script.type = 'text/javascript';
    document.head.appendChild(script);
    
}
