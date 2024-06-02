const axios = require('axios');

const baseUrl = 'http://20.244.56.144/test/companies';
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MzIyNjg0LCJpYXQiOjE3MTczMjIzODQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJkODc3MGMyLWYxZDItNDA1My1iYjI2LWRiOWZjMzJlZGU0NiIsInN1YiI6ImFha2FzaC5hcjEyMTNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiS0NDIEluc3RpdHVlIG9mIFRlY2huaWNhbCBcdTAwMjYgTWFuYWdlbWVudCIsImNsaWVudElEIjoiYmQ4NzcwYzItZjFkMi00MDUzLWJiMjYtZGI5ZmMzMmVkZTQ2IiwiY2xpZW50U2VjcmV0IjoicGVrcVhKamZlelp5aW1YUiIsIm93bmVyTmFtZSI6IkFha2FzaCBSYWpwdXQiLCJvd25lckVtYWlsIjoiYWFrYXNoLmFyMTIxM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMjA0OTIwMTA5MDAxIn0.mIv-e0Xw-_BBEOEx0Gt2YLcRUFjKVxokwMm-1nUegcI";

// Create an instance of Axios with default configuration
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${authToken}`
    }
});

async function providedApi(company, category, top, minPrice, maxPrice) {
    const url = `/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const response = await apiClient.get(url);
    return response.data;
}

module.exports = providedApi;
