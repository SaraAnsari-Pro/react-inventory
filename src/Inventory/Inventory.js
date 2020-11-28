import './Inventory.css'



function Inventory ({item, productCode, brand, count, price}) {
    return (
        <div className="inventoryContainer">

            <div>
                <h1>Item :{item} </h1>
            </div>
            <div>
                <h1>Product Code :{productCode} </h1>
            </div>
            <div>
                <h1>Brand :{brand} </h1>
            </div>
            <div>
                <h1>count :{count} </h1>
            </div>
            <div>
                <h1>Price :{price} </h1>
            </div>

        </div>
    );
}
export default Inventory;