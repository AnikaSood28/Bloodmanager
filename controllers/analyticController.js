const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");

// GET DOG BLOOD DATA
const bloodGroupDetailsContoller = async (req, res) => {
  try {
    // Updated blood groups for dog blood types
    const bloodGroups =["DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"];

    const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);

    // Get single blood group data
    await Promise.all(
      bloodGroups.map(async (bloodGroup) => {
        // Count TOTAL IN
        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        
        // Count TOTAL OUT
        const totalOut = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);

        // Calculate AVAILABLE BLOOD
        const availabeBlood =
          (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

        // PUSH DATA
        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalOut[0]?.total || 0,
          availabeBlood,
        });
      })
    );

    return res.status(200).send({
      success: true,
      message: "Blood Group Data Fetch Successfully",
      bloodGroupData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Bloodgroup Data Analytics API",
      error,
    });
  }
};

module.exports = { bloodGroupDetailsContoller };
