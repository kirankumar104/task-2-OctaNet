function addFood() {
    const foodInput = document.getElementById('foodInput');
    const foodList = document.getElementById('foodList');
    
    if (foodInput.value.trim() !== "") {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = foodInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            foodList.removeChild(li);
        };

        const markCompletedButton = document.createElement('button');
        markCompletedButton.textContent = 'Mark Completed';
        markCompletedButton.className = 'mark-completed';
        markCompletedButton.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(span);
        li.appendChild(markCompletedButton);
        li.appendChild(deleteButton);
        foodList.appendChild(li);

        foodInput.value = "";
    }
}
