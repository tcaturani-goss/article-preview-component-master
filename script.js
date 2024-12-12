const shareButton = document.getElementById('shareButton');
const socialBox = document.getElementById('socialBox');
const desktopBlimp = document.getElementById('desktopBlimp');

// Function to check if the layout is desktop or mobile
const isDesktopLayout = () => window.matchMedia('(min-width: 64em)').matches;

// Toggle visibility logic for desktop blimp and mobile social box
shareButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling to the document
    if (isDesktopLayout()) {
        // For desktop: Toggle the desktop blimp
        const isVisible = desktopBlimp.style.display === 'block';
        desktopBlimp.style.display = isVisible ? 'none' : 'block';
    } else {
        // For mobile: Toggle the mobile social box
        socialBox.classList.toggle('visible');
    }

    // Toggle active state for the share button
    const isActive = isDesktopLayout()
        ? desktopBlimp.style.display === 'block'
        : socialBox.classList.contains('visible');

    if (isActive) {
        shareButton.classList.add('active'); // Add 'active' class when visible
    } else {
        shareButton.classList.remove('active'); // Remove 'active' class when hidden
    }
});

// Close blimp or social box when clicking outside
document.addEventListener('click', (e) => {
    if (
        !shareButton.contains(e.target) &&
        !desktopBlimp.contains(e.target) &&
        !socialBox.contains(e.target)
    ) {
        desktopBlimp.style.display = 'none';
        socialBox.classList.remove('visible');
        shareButton.classList.remove('active');
    }
});