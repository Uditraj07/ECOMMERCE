
    const addProductButton = document.getElementById('addProductButton');
    const addProductModal = document.getElementById('addProductModal');
const closeModal = document.getElementById('closeModal');
    
addProductButton.addEventListener('click', function (event) {
        event.preventDefault();
        addProductModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', function () {
        addProductModal.classList.add('hidden');
    });
    cancelButton.addEventListener('click', function () {
        addProductModal.classList.add('hidden');
    });

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
    
async function createProduct(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let imageUrl = document.getElementById('img').value;
    let price = document.getElementById('price').value;
    let stock = document.getElementById('stock').value;
    let description = document.getElementById('description').value;
    let productDetails = { title, imageUrl, price, stock, description };
    let result = await axios.post('admin/add-product', productDetails);
    if (result.data.message === true) {
        document.getElementById('title').value = '';
        document.getElementById('img').value = '';
        document.getElementById('price').value = '';
        document.getElementById('stock').value = '';
        document.getElementById('description').value = '';
        const tableBody = document.querySelector('#product_body_section');
        let count = Number(tableBody.lastElementChild.firstElementChild.innerText) + 1;
        const row = document.createElement('tr');
        row.innerHTML = `
         <td class="py-2 px-4">${count}.</td>
        <td class="py-2 px-4">${title}</td>
        <td class="py-2 px-4">${price}</td>
        <td class="py-2 px-4">${stock}</td>
        <td class="py-2 px-4">${description}</td>
        <td class="py-2 px-4">
        <button class="text-blue-500 hover:underline" >Edit</button>
        <button class="text-red-500 hover:underline ml-4" onclick="delete_product()" >Delete</button>
        </td>
    `;
        
        tableBody.appendChild(row);
        count++;

    }
}

async function delete_product() {
    let res =await axios.delete('admin/delete-product/1');
}

async function getAllProduct() {
   
    let result = await axios.get('admin/get-all-products');
    let count = 0;
    result.data.forEach((product) => {
 
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class="py-2 px-4">${count%10+1}.</td>
        <td class="py-2 px-4">${product.title}</td>
        <td class="py-2 px-4">${product.price}</td>
        <td class="py-2 px-4">${product.stocks}</td>
        <td class="py-2 px-4">${product.description}</td>
        <td class="py-2 px-4">
        <button class="text-blue-500 hover:underline" >Edit</button>
        <button class="text-red-500 hover:underline ml-4" onclick="delete_product()">Delete</button>
        </td>
    `;
        const tableBody = document.querySelector('#product_body_section');
        tableBody.appendChild(row);
        count++;
    })
}
getAllProduct();