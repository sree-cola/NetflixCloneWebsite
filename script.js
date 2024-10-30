function toggleDropdown(event) {
    // Prevent the click event from bubbling to the window
    event.stopPropagation();

    // Find the closest dropdown element
    const dropdown = event.currentTarget.closest('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropbtn = dropdown.querySelector('.dropbtn');

    // Toggle the dropdown content visibility
    dropdownContent.classList.toggle('show');

    // Change the button text based on dropdown state
    if (dropdownContent.classList.contains('show')) {
        dropbtn.textContent = '✖'; // Change to "X"
    } else {
        dropbtn.textContent = '+'; // Change back to "+"
    }
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const buttons = document.querySelectorAll('.dropbtn');

    dropdowns.forEach((dropdownContent, index) => {
        const dropbtn = buttons[index];

        // If the dropdown is open and the clicked target is not the button or dropdown content
        if (dropdownContent.classList.contains('show') && !event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
            dropdownContent.classList.remove('show'); // Hide dropdown content
            dropbtn.textContent = '+'; // Reset button text
        }
    });
});
