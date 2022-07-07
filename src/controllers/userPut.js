const userSchema = require("../models/user");


const userPut = (req, res) =>{
    const {id} = req.params;
    const {name, age, birthday, nickname,role,active, email, image, isActive, genderInt, gender, message, review, dislike, description, henryLevel, likeReceived, likeGiven, matches, interests} = req.body

    userSchema
        .updateOne({_id:id},{ $set: {name, age, birthday, nickname,isActive, role,active, message, review,  email, image, genderInt, gender, dislike, description, henryLevel, likeReceived, likeGiven, matches, interests}})

        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    userPut
};
