function toggleHeadContainerVisibility() {  
    var headContainer = document.querySelector('.head-container');

    // Check if the transition is ongoing
    if (!headContainer.classList.contains('transitioning')) {
        headContainer.classList.add('transitioning');

        // Toggle the 'shrink' class on the head-container
        headContainer.classList.toggle('shrink');

        // Remove the 'transitioning' class when the transition ends
        headContainer.addEventListener('transitionend', function() {
            headContainer.classList.remove('transitioning');
        });
    }
    else{
        // Toggle the 'shrink' class on the head-container
        headContainer.classList.toggle('expand');
    }
}
