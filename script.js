console.log('Script running...')
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() =>{
        document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }
});


const parentContainer = document.querySelector('.blogcontainer');
parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if (!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-text'); // Updated selector
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Read More') ?
        'Read Less...' : 'Read More...';
});

