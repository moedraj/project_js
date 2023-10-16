
function approveComment(commentId) {
    var approvalCounter = document.getElementById("approval-counter-" + commentId);
    var count = parseInt(approvalCounter.innerText);
    count++;
    approvalCounter.innerText = count;
}


function disapproveComment(commentId) {
    var disapprovalCounter = document.getElementById("disapproval-counter-" + commentId);
    var count = parseInt(disapprovalCounter.innerText);
    count++;
    disapprovalCounter.innerText = count;
}
