# E-Commerce API

* This is an E-commerce API created using Node.js and MongoDB
* It is used to store **name** and **quantity** of the products
* We can perform requests in this API like
    1. Creating a new product
    2. Updating the quantity of the products
    3. Deleting the product

## STEPS TO USE THE API:
1. run `npm init` command on terminal in the project directory to download required packages
2. start the server using `node index.js`
3. Open **postman**
4. Make a **GET request** on [localhost:8000/products](localhost)
5. All the products should be visible now

### STEPS TO CREATE A NEW PRODUCT: 
1. Start the server using `node index.js`
2. Open **postman**
3. Put [localhost:8000/products/create](localhost) as the URL
4. Select **Body** tab below the url textarea and then select **x-www-form-urlencoded**
5. Add name & quantity as the keys and set the desired values for the keys
6. Make a **POST request**
7. If you recieve the message saying **new product added successfully** then you have done everything correct
8. The product is created. Check it out by making a **GET request** at [localhost:8000/products](localhost)
> ID's for the products are auto-generated. So, `name` and `quantity` are enough for creating the product

### STEPS TO DELETE A PRODUCT:
1. Start the server using `node index.js`
2. Copy the **id** of the product you want to delete
3. Open **postman**
4. Add the id after [localhost:8000/products/](localhost)
5. Make a **DELETE request**
6. You will receive a message saying **deleted successfully**

### STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1. Start the server using `node index.js`
2. Copy the **id** of the product whose quantity you want to update
3. Open **postman**
4. Put the id after [localhost:8000/products/](localhost)
5. After putting the id add **/update_quantity/?number={x}** in the url where `x` is the *new quantity of the product*
6. The url should be looking like **localhost:8000/products/{id}/update_quantity/?number={x}** where `id` is *id of product* and `x` is *number by which you want to increase or decrease the quantity*
7. Make a **POST request** and you should get a message saying **updated successfully**


## TECHSTACK
Node.js, MongoDB, Express.js
