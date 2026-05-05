import Order from "../models/order.js"
import Product from "../models/product.js"

export async function createOrder(req,res){
    //get user info
    if(req.user == null){
        res.status(403).json({
            message : "Please login and try again"
        })
        return
    }

    const orderInfo = req.body

    if(orderInfo.name == null){
        orderInfo.name = req.user.firstName + " " + req.user.lastName
    }

    let orderId = "CBC0001"

    const lastOrder = await Order.find().sort({date : -1}).limit(1)

    if(lastOrder.length >0){
        const lastOrderId = lastOrder[0].orderId //CBC00551
        const lastOrderNumberString = lastOrderId.replace("CBC", "") //00551
        const lastOrderNumber = parseInt(lastOrderNumberString) //551
        const newOrderNumber = lastOrderNumber + 1 //552
        const newOrderNumberString = String(newOrderNumber).padStart(5, '0'); //00552
        orderId = "CBC" + newOrderNumberString //CBC00552
    }

    try{
        let total = 0;
        let labeledTotal = 0;
        const products = []

        for (let i=0; i<orderInfo.products.length; i++){
            const item = await Product.findOne({productID : orderInfo.products[i].productID})
            if(item == null){
                res.status(404).json({
                    message : "Product with productId " + orderInfo.products[i].productID + " not found"
                })
                return
            }
            
            if(item.isAvailable == false){
                res.status(400).json({
                    message : "Product with productId " + orderInfo.products[i].productID + " is not available right now!"
                })
                return
            }

            products[i] = {
                productInfo : {
                    productID : item.productID,
                    name : item.name,
                    altNames : item.altNames,
                    description : item.description,
                    images : item.images,
                    labeledPrice : item.labeledPrice,
                    price : item.price
                },
                quantity : orderInfo.products[i].qty
            }

            total += (item.price * orderInfo.products[i].qty)
            labeledTotal += (item.labeledPrice * orderInfo.products[i].qty)

        }
        const order = new Order({
            orderId : orderId,
            email : req.user.email,
            phone : orderInfo.phone,
            name : orderInfo.name,
            address : orderInfo.address,
            total : total,
            labeledTotal : labeledTotal,
            products : products
        })
        const createOrder = await order.save()
        res.json({
            message : "Order created successfully",
            order : createOrder
        })
    }catch(err){
        res.status(500).json({
            message : "Failed to create order",
            error : err
        })
    }
 

    //add current users name if not provided
    //generate order id
    //create order
}