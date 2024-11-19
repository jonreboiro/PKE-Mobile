const sidebar = document.getElementById('sidebar');
        const toggleButton = document.getElementById('toggleSidebar');
        const closeButton = document.querySelector('#sidebar .close-btn');
        const content = document.querySelector('.content');

        // Open the sidebar
        toggleButton.addEventListener('click', () => {
            sidebar.classList.add('show');
            content.classList.add('shifted');
        });

        // Close the sidebar
        closeButton.addEventListener('click', () => {
            sidebar.classList.remove('show');
            content.classList.remove('shifted');
        });

        // Close the sidebar when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
                sidebar.classList.remove('show');
                content.classList.remove('shifted');
            }
        });