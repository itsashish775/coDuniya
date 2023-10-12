const userController = {
  userRegistration: async (req, res) => {
    try {
      console.log(req.body);
      if (req.body) {
        res.status(200).send({ message: "Success", data: req.body });
      }
    } catch (error) {
      res.status(500).send('Internal Server Error' + error);
    }


  },

};

module.exports = userController;