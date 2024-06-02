const express = require('express');
const { v4: uuidv4 } = require('uuid');
const providedApi = require('../utils/providedApi');

const router = express.Router();

router.get('/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const { company, top,  minPrice, maxPrice } = req.query;

    try {
        if (!company) {
            return res.status(400).json({ error: 'Company name is required' });
        }

        let products = await providedApi(company, categoryname, top, minPrice, maxPrice);
        
        if (!Array.isArray(products)) {
            return res.status(500).json({ error: 'Failed to fetch products. Unexpected response format.' });
        }
    
        // Add unique IDs to each product
        products = products.map(product => ({ ...product, id: uuidv4() }));


        res.json(products);
    } catch (error) {
        console.error("Error caught while fetching products:", error);

        // Check if the error is an Axios error
        if (error.isAxiosError) {
            // Log the Axios error details
            console.error("Axios request failed:", error.message);
            
            // Extract the response data if available
            const responseData = error.response ? error.response.data : null;
            
            // Determine the appropriate status code and error message
            let statusCode = 500;
            let errorMessage = "Failed to fetch products";
            if (error.response && error.response.status) {
                statusCode = error.response.status;
                errorMessage = responseData && responseData.error ? responseData.error : "Failed to fetch products";
            }
    
            // Respond with the appropriate status code and error message
            res.status(statusCode).json({ error: errorMessage });
        } else {
            // For non-Axios errors, respond with a generic error message
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    }
});

router.get('/:categoryname/products/:productid', async (req, res) => {
    const { categoryname, productid } = req.params;
    const { company, minPrice = 0, maxPrice = Infinity } = req.query;

    try {
        if (!company) {
            return res.status(400).json({ error: 'Company name is required' });
        }

        let products = await providedApi(company, categoryname, 100, minPrice, maxPrice); // Fetch more products to find the specific one

        if (!Array.isArray(products)) {
            return res.status(500).json({ error: 'Failed to fetch products. Unexpected response format.' });
        }

        const product = products.find(product => product.id === productid);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error("Error caught while fetching product details:", error);

        // Check if the error is an Axios error
        if (error.isAxiosError) {
            // Log the Axios error details
            console.error("Axios request failed:", error.message);
            
            // Extract the response data if available
            const responseData = error.response ? error.response.data : null;
            
            // Determine the appropriate status code and error message
            let statusCode = 500;
            let errorMessage = "Failed to fetch product details";
            if (error.response && error.response.status) {
                statusCode = error.response.status;
                errorMessage = responseData && responseData.error ? responseData.error : "Failed to fetch product details";
            }
    
            // Respond with the appropriate status code and error message
            res.status(statusCode).json({ error: errorMessage });
        } else {
            // For non-Axios errors, respond with a generic error message
            res.status(500).json({ error: 'Failed to fetch product details' });
        }
    }
});

module.exports = router;
