function showSection(sectionId) {
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => section.style.display = 'none');
            document.getElementById(sectionId).style.display = 'block';
        }

        // Event listeners for sidebar links
        document.getElementById('dashboardLink').addEventListener('click', () => {
            showSection('dashboardSection');
            document.getElementById('pageTitle').textContent = 'Dashboard';
        });

        document.getElementById('ordersLink').addEventListener('click', () => {
            showSection('ordersSection');
            document.getElementById('pageTitle').textContent = 'Orders';
        });

        document.getElementById('productsLink').addEventListener('click', () => {
            showSection('productsSection');
            document.getElementById('pageTitle').textContent = 'Products';
        });

        document.getElementById('customersLink').addEventListener('click', () => {
            showSection('customersSection');
            document.getElementById('pageTitle').textContent = 'Customers';
        });

        document.getElementById('reportsLink').addEventListener('click', () => {
            showSection('reportsSection');
            document.getElementById('pageTitle').textContent = 'Reports';
            renderSalesChart(); // Render the chart when Reports section is shown
        });

        document.getElementById('settingsLink').addEventListener('click', () => {
            showSection('settingsSection');
            document.getElementById('pageTitle').textContent = 'Settings';
        });

        // Default section
        showSection('dashboardSection');

        // Log out function
        function logOut() {
            alert('Logging out...');
            // Add log out logic here
        }