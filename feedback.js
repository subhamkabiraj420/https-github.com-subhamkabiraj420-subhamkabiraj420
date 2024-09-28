document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
        feedbackList.push(feedback);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
        document.getElementById('message').textContent = 'Thank you for your feedback!';
        document.getElementById('feedback').value = ''; // Clear the textarea
    } else {
        document.getElementById('message').textContent = 'Please enter feedback!';
    }
});
