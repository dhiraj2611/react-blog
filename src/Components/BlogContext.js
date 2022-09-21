import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : " Kartik Aaryan on ‘Bhool Bhulaiyaa 2’ crossing the 200 crore mark; Didn’t know it will ‘revive’ Bollywood",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 18 2022",
            "ImageAsset"    : "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/bb2_live_updates_main_1200x768_0-sixteen_nine.jpeg?size=948:533",
            "BlogContent"   : "Kartik Aaryan is currently basking in the success of Bhool Bhulaiyya. The film became a commercial success and has broken all box office records surpassing the 200 crore mark. Reflecting on the same, Kartik admitted that he ‘never imagined or thought’ that the film will cross the 200 crore mark.",
            "Likes"         : "1000K"
        },
        {
            "Title" : " The Kashmir Files director Vivek Agnihotri and producer Pallavi Joshi celebrate their 25th wedding anniversary",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 20 2022",
            "ImageAsset"    : "https://www.firstpost.com/wp-content/uploads/2022/06/640-x-363-2022-06-28T163658.854.jpg?impolicy=website&width=640&height=362",
            "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devgn has gone on floors with the title ‘Bholaa’",
            "Likes"         : "700"
        },
        {
            "Title" : " Aditya Roy Kapur on playing action hero in Rashtra Kavach Om: 'It’s a physically gruelling film'",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 22  2022",
            "ImageAsset"    : "https://www.firstpost.com/wp-content/uploads/2022/06/Collage-Maker-29-Jun-2022-12.08-PM-min.jpg?impolicy=website&width=640&height=362",
            "BlogContent"   : "In Kapil Verma's Rashtra Kavach Om, Aditya Roy Kapur portrays the character of a commando. The film also stars Jackie Shroff, Sanjana Sanghi, Ashutosh Rana and Prakash Raj.",
            "Likes"         : "5000K"
        },
        {
            "Title" : " Taapsee Pannu talks about working with Shah Rukh Khan in their upcoming film Dunki",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 24 2022",
            "ImageAsset"    : "https://www.firstpost.com/wp-content/uploads/2022/06/640-x-363-2022-06-28T194050.234.jpg?impolicy=website&width=640&height=362",
            "BlogContent"   : "Actress Taapsee Pannu says teaming up with SRK in 'Dunki' is a golden opportunity.",
            "Likes"         : "600"
        },
        {
            "Title" : " Samrat Prithviraj: Akshay Kumar’s historical action-drama gets OTT release date",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 26 2022",
            "ImageAsset"    : "https://www.firstpost.com/wp-content/uploads/2022/06/Collage-Maker-28-Jun-2022-02.41-PM-min.jpg?impolicy=website&width=640&height=362",
            "BlogContent"   : "Akshay Kumar's Samrat Prithviraj presents an inspiring and entertaining saga of one of the greatest kings and fearless warriors in Indian history — Prithviraj Chauhan of the Chahamana dynasty.",
            "Likes"         : "800"
        }
    ]);

    const [technology, setTechnology] = useState([
        
        
        {
            "Title" : " A New Breakthrough Could Make It Possible To Harvest Solar Power at Night",
            "CategoryName"  : "Technology",
            "PublishedDate" : "June 19 2022",
            "ImageAsset"    : "https://scitechdaily.com/images/Next-Generation-Solar-Panels-Illustration.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
            "BlogContent"   : "Researchers have created a device that is capable of turning infrared heat into electricity through the use of a power-generation device called a ‘thermo-radiative diode’.",
            "Likes"         : "700"
        },
       
        {
            "Title" : " Research Shows That Robotic Surgery Is Safer and Improves Patient Recovery Time by 20%",
            "CategoryName"  : "Technology",
            "PublishedDate" : "June 13 2022",
            "ImageAsset"    : "https://scitechdaily.com/images/Robotic-Surgery-777x583.jpg?ezimgfmt=ng:webp/ngcb1",
            "BlogContent"   : "Research from the University College London and the University of Sheffield has shown that robot-assisted surgery for bladder cancer removal and repair allows patients to recover much faster and spend considerably less time in the hospital.",
            "Likes"         : "650"
        },
        {
            "Title" : " Samsung introduces 200MP camera sensor with smallest pixels",
            "CategoryName"  : "Technology",
            "PublishedDate" : "June 23 2022",
            "ImageAsset"    : "https://www.dailypioneer.com/uploads/2022/story/images/big/samsung-introduces-200mp-camera-sensor-with-smallest-pixels-2022-06-23.jpg",
            "BlogContent"   : "Samsung on Thursday launched next-gen 200MP image sensor with the industrys smallest 0.56-micrometer pixels that will allow smartphone users to take movie-like cinematic footage.",
            "Likes"         : "422"
        },
        {
            "Title" : " AI adoption to add $500 bn to India's GDP by 2025: Nasscom",
            "CategoryName"  : "Technology",
            "PublishedDate" : "June 24 2022",
            "ImageAsset"    : "https://www.dailypioneer.com/uploads/2022/story/images/big/ai-adoption-to-add--500-bn-to-india-s-gdp-by-2025--nasscom-2022-06-23.jpg",
            "BlogContent"   : "The adoption of artificial intelligence (AI) and data utilisation strategy can add $500 billion to India's GDP by 2025, a new Nasscom report showed on Thursday.",
            "Likes"         : "800"
        }
    ]);
    
    const [Cars, setCars] = useState([
        {
            "Title" : " FERRARI SF90 Stradale beats the production lap record at this circuit",
            "CategoryName"  : "Cars",
            "PublishedDate" : "June 24 2022",
            "ImageAsset"    : "https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2022/06/Ferrari-SF90-Stradale-Anglesey-lap-record.jpg?w=1280&ssl=1",
            "BlogContent"   : "The Ferrari SF90 Stradale has added another feather to its cap. The 1000 hp plug-in hybrid supercar just lapped the Anglesey Circuit in record time.",
            "Likes"         : "100"
        },
        {
            "Title" : " McLaren P1 Spider by Lanzante debuts at Goodwood",
            "CategoryName"  : "Cars",
            "PublishedDate" : "June 23 2022",
            "ImageAsset"    : "https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2022/06/lanzante-p1-spider-launch-05.jpg?w=1280&ssl=1",
            "BlogContent"   : "Lanzante has stunned everyone on the very first day of the 2022 Goodwood Festival of Speed by showcasing a McLaren P1 Spider.The McLaren P1 Spider was commissioned by a customer, and who better to build one than the experts at Lanzante.",
            "Likes"         : "800K"
        },
        {
            "Title" : " Maserati MC20 Cielo: The Italian beauty drops its top",
            "CategoryName"  : "Cars",
            "PublishedDate" : "June 21 2022",
            "ImageAsset"    : "https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2022/05/maserati-mc20-cielo-011.jpg?w=1280&ssl=1",
            "BlogContent"   : "Maserati has taken the wraps off the convertible version of the MC20 supercar. It’s called the MC20 Cielo, and we love it!The MC20 is a gorgeous little coupe, and the Cielo takes it a step further. The car has a retractable hardtop that folds away in just 12 seconds.",
            "Likes"         : "2M"
        },
        {
            "Title" : " Koenigsegg Jesko Komet looks like a burning fireball",
            "CategoryName"  : "Cars",
            "PublishedDate" : "June 18 2022",
            "ImageAsset"    : "https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2022/05/Koenigsegg-Jesko-Komet-Absolut-rendering-2.jpg?w=1280&ssl=1",
            "BlogContent"   : "As the name suggests, the inspiration for this spec was the fireball seen when a comet / asteroid enters the Earth’s atmosphere. The front of the car is painted in Pearl White that fades into Sweet Mandarin at the rear – kind of like the long fiery tail of the space rock.",
            "Likes"         : "800K"
        },
        {
            "Title" : " Lamborghini Aventador Ultimae sells for $1.3 million",
            "CategoryName"  : "Cars",
            "PublishedDate" : "June  22 2022",
            "ImageAsset"    : "https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2022/05/Used-2022-LAMBORGHINI-AVENTADOR-ULTIMAE-1.jpg?w=1280&ssl=1",
            "BlogContent"   : "The Aventador Ultimae is Lamborghini’s last flagship supercar powered by a naturally aspirated V12 engine. That itself makes it quite special. With production limited to just 350 units, these cars are already selling for big bucks. Here’s one offered at a premium of €250,000.",
            "Likes"         : "10M"
        }
       
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : "Is running linked to ageing, increased cardiovascular risk in men?",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "June 27 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/running_200_pexels.jpg",
            "BlogContent"   : "In the recent years, with many people becoming fitness conscious, marathon running or long-distance running has become common. According to data, the number of women participants have also reported a surge",
            "Likes"         : "80K"
        },
        {
            "Title" : "International Day of Yoga 2022: Can yoga be a good substitute for cardio exercises?",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "June 26 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/yoga-1200.jpg",
            "BlogContent"   : "Yoga is known to impart several mental, physical and spiritual benefits. It calms the mind, alleviates stress and keeps your overall well-being in check. But, can it also give you benefits like a blood-pumping and heart-shaking cardio workout does?",
            "Likes"         : "100k"
        },
        {
            "Title" : " Kamal Haasan does 26 clean incline pushups; sets massive fitness goals",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "June 24 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/kamal-hassan_insta-lokesh-kanagaraj-twitter.jpg",
            "BlogContent"   : "Kamal Haasan maybe 67 years old, but he never fails to set goals — from acting to fashion and even fitness. As such, the actor’s fitness prowess ",
            "Likes"         : "800K"
        },
        {
            "Title" : " Fitness alert: Simple exercises to strengthen and tone the core",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "June 20 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/03/belly-fat_1200_getty.jpg",
            "BlogContent"   : "Regularly doing core exercises not only helps build strength and stability, but also reduce belly fat, which is one of the most common issues experienced by many.",
            "Likes"         : "500"
        },
        
    ]);

    const [food, setFood] = useState([
        {
            "Title" : " Body Absorbs Plant-Based Meat Less Than Animal-Based Meat: Study",
            "CategoryName"  : "Food",
            "PublishedDate" : "June 21 2022",
            "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2022/06/plant-based-meat-16564148463x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent"   : "A study has suggested that protein from the plant-based meat alternatives may not be as accessible to human cells as those from real meat",
            "Likes"         : "500k+"
        },
        {
            "Title" : " Pncrease Your Brain Functioning by Incorporating These Nutritious Foods into Your Meal",
            "CategoryName"  : "Food",
            "PublishedDate" : "June 23 2022",
            "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2022/06/untitled-design-24-16541678803x2.png?impolicy=website&width=510&height=356",
            "BlogContent"   : "It is extremely crucial to include certain foods in our daily meal, which plays an important role in our cognitive functioning",
            "Likes"         : "125"
        },
        {
            "Title" : " “Hill Station Main Corn, Pakodas Or Momos?” Tahira Kashyap Wants To Know Your Pick",
            "CategoryName"  : "Food",
            "PublishedDate" : "June 22 2022",
            "ImageAsset"    : "https://c.ndtvimg.com/2022-06/frt4j6qo_bhutta_625x300_29_June_22.jpg",
            "BlogContent"   : "Tahira Kashyap is back with her food stories. And this time, with glimpses of her indulgences from a hill station. She is a hardcore foodie who likes to share her gastronomic adventures with followers on social media",
            "Likes"         : "400K"
        },
        {
            "Title" : " Keep Yourself Hydrated and Fresh With This Tasty Tangy Kokum Drink",
            "CategoryName"  : "Food",
            "PublishedDate" : "June 24 2022",
            "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2022/06/summer-drinks-16559013323x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent"   : "Keeping yourself hydrated is of primary importance and an easy way to tackle major problems",
            "Likes"         : "100"
        },
        {
            "Title" : " Un-Layering the Delicious South Indian Malabar Parotta",
            "CategoryName"  : "Food",
            "PublishedDate" : "June 27 2022",
            "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2022/06/malabar-paratha-16561669553x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent"   : "One dish that slips right out from this stereotypical image but is equally popular, so much so that it can be considered as one of the signature dishes in South India, is the Malabar Parotta",
            "Likes"         : "600"
        }
    ]);

    return(
        <BlogContext.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [Cars,setCars],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </BlogContext.Provider>
    )
}