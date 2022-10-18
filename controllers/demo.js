import Demo from "../models/demo.js";

const registereDemo = async (req, res) => {
    console.log(req.body);
    const { firstName, email, phoneNumber, bookingDate, companyName } = req.body;
    if (!firstName || !phoneNumber || !bookingDate) {
      throw new Error("please PROVIDE required values ");
    }
  

  
    const demo = await Demo.create(req.body);
  
    res.status(201).json({
      status: "success",
      message:'successfully registered demo',
      data: {
        data: demo,
      },
    });
  };


  const getDemos = async (req, res) => {
   console.log(req.body.Role)
    const demos = await Demo.find({}).sort({createdAt: -1})

    res.json({
        status: "success",
        data: {
            data: demos,
        },
    });
};

  export  {registereDemo ,getDemos}