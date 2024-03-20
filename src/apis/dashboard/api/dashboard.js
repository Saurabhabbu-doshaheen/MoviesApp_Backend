const dashboard = async (req, res) => {
  try {
    console.log("this is just dashboard");

    res.send("hope iam being sent!");
  } catch (error) {

    res.send(error);
    
  }
};

module.exports = {dashboard};