import Purchase from "../models/purchase.js";

const registerPurchase = async (req, res) => {
    console.log(req.body);
    // const { firstName, email, phoneNumber, bookingDate, companyName } = req.body;
    // if (!firstName || !phoneNumber || !bookingDate) {
    //   throw new Error("please PROVIDE required values ");
    // }
  

  
    const purchase = await Purchase.create(req.body);
  
    res.status(201).json({
      status: "success",
      message:'successfully  purchased',
      data: {
        data: purchase,
      },
    });
  };




  export  {registerPurchase ,}