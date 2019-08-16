const mongoose = require("mongoose");
const db = require("../models");
const key = require("../config/keys")

// Connect to MongoDB
mongoose
    .connect(
        key.mongoURI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const storySeed = [
    {
        user: "5d545db5c84e6438e4f069ca",
        title: "Broken Baby Bottle",
        story: "I had just injured my back, but hadn't realized the extent to which I had hurt it, yet.  So, I end up staying up the entire night in pain before asking my wife to take me to the ER.  Three hours, and some amazing pain medicine, later, my wife and I are driving home.  We pull up to a stop light and I look over to the side of the road and see a broken baby bottle.  Feeling a deep connection with this baby bottle, I look at it and say, 'It's okay, baby bottle, I'm broken, too.'",
        lol: [],
        category: "Other",
        date: Date.now()
        
    },
    {
        user: "5d545db5c84e6438e4f069ca",
        title: "Sad Pillow",
        story: "I went to bed late and saw that my daughter had left some hair chalk on my side of the bed.  Thinking it'd be fun to go ahead and use her hair chalk and make my hair pink, I put the chalk in my hair and then forgot about it.  The next day, I was going to bed and see my pillow is now pink.",
        lol: [],
        category: "Baby/Kids",
        date: Date.now()
        
    },
    {
        user: "5d545db5c84e6438e4f069ca",
        title: "Well, I'm having...",
        story: "My wife was very pregnant (8 months pregnant or so) and we'd been out to eat dinner with a family friend.  Afterward, she was still hungry and wanted to stop at TGIFriday's and get some dessert.  Trying to keep the pregnant cravings satisfied, I agreed to it and we went across the highway to TGIFriday's.  After discussing what we are going to get, the waitress comes up and asks our order.  My wife, with great emphasis, says '*I* am having the chocolate brownie.'  That's when I realized, we weren't talking about what we were sharing for dessert, but she was telling me what she was having and that I was supposed to have chosen something for myself.",
        lol: [],
        category: "Pregnant",
        date: Date.now()
        
    },
    {
        user: "5d545db5c84e6438e4f069ca",
        title: "Fleas!",
        story: "When I first got my cat, I was fairly young (early 20s) and very proective of her.  One day, I noticed there was a flea on her.  I called the vet, practically in tears, saying that my cat had fleas and needed to be treated.",
        lol: [],
        category: "Animals",
        date: Date.now()
        
    },
    {
        user: "5d545db5c84e6438e4f069ca",
        title: "Horizontal Pirouette",
        story: "Coming back from injury, I decided to try and play soccer.  My opponent took a shot on goal that I tried to block with my foot.  I've been told that I looked as if I was doing a horizontal pirouette or a barrel roll as I turned over, spreading my legs far apart, creating a perfect lane for the ball to hit me square in the family jewels and immediately drop me.  I was surrounded by people checking on me making sure I was okay.  They were all worried I had injured my back again.  When I told them, 'no, it hit me square in the nuts', there was a sigh of relief from everyone around me, including the ref.",
        lol: [],
        category: "Sports",
        date: Date.now()
        
    }
]

db.Story
    .remove({})
    .then(() => db.Story.collection.insertMany(storySeed))
    .then(data => {
        console.log(data.result.n + " stories inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })