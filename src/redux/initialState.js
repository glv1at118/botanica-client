export const initialState = {
    potPresets: [ // these are the botanica's flower pot presets, defines a pot's data
        {
            name: "Plant Pot 0",
            price: 10,
            identity: 0
        },
        {
            name: "Plant Pot 1",
            price: 10,
            identity: 1
        },
        {
            name: "Plant Pot 2",
            price: 10,
            identity: 2
        },
        {
            name: "Plant Pot 3",
            price: 10,
            identity: 3
        },
        {
            name: "Plant Pot 4",
            price: 10,
            identity: 4
        },
        {
            name: "Plant Pot 5",
            price: 10,
            identity: 5
        },
        {
            name: "Plant Pot 6",
            price: 10,
            identity: 6
        },
        {
            name: "Plant Pot 7",
            price: 10,
            identity: 7
        },
        {
            name: "Plant Pot 8",
            price: 10,
            identity: 8
        },
        {
            name: "Plant Pot 9",
            price: 10,
            identity: 9
        }
    ],
    plantPresets: [ // These are the botanica plant presets templates. Defines a plant's various data
        {
            name: "Plant A",
            hydrationMax: 50,
            yieldMax: 50,
            seedPrice: 10,
            fruitValue: 1,
            plantValue: 15,
            lifeStageTime: [2, 3, 4, 5, 3],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 0
        },
        {
            name: "Plant B",
            hydrationMax: 80,
            yieldMax: 80,
            seedPrice: 20,
            fruitValue: 2,
            plantValue: 25,
            lifeStageTime: [5, 6, 7, 8, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 1
        },
        {
            name: "Plant C",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 2
        },
        {
            name: "Plant D",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 3
        },
        {
            name: "Plant E",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 4
        },
        {
            name: "Plant F",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 5
        },
        {
            name: "Plant G",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 6
        },
        {
            name: "Plant H",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 7
        },
        {
            name: "Plant I",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 8
        },
        {
            name: "Plant J",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 9
        },
        {
            name: "Plant K",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 10
        },
        {
            name: "Plant L",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 11
        },
        {
            name: "Plant M",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 12
        },
        {
            name: "Plant N",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 13
        },
        {
            name: "Plant O",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 14
        },
        {
            name: "Plant P",
            hydrationMax: 10,
            yieldMax: 20,
            seedPrice: 5,
            fruitValue: 1,
            plantValue: 40,
            lifeStageTime: [2, 3, 4, 5, 5],
            lifeStageName: ["Seed", "Sprout", "Sapling", "Growth", "Ripeness"],
            identity: 15
        }
    ],
    shopProducts: { // the products listed on the shelf in the shop
        seeds: [
            {
                seedName: "Plant A's Seed",
                seedPrice: 5,
                identity: 0
            },
            {
                seedName: "Plant B's Seed",
                seedPrice: 5,
                identity: 1
            },
            {
                seedName: "Plant C's Seed",
                seedPrice: 5,
                identity: 2
            },
            {
                seedName: "Plant D's Seed",
                seedPrice: 5,
                identity: 3
            },
            {
                seedName: "Plant E's Seed",
                seedPrice: 5,
                identity: 4
            },
            {
                seedName: "Plant F's Seed",
                seedPrice: 5,
                identity: 5
            },
            {
                seedName: "Plant G's Seed",
                seedPrice: 5,
                identity: 6
            },
            {
                seedName: "Plant H's Seed",
                seedPrice: 5,
                identity: 7
            },
            {
                seedName: "Plant I's Seed",
                seedPrice: 5,
                identity: 8
            },
            {
                seedName: "Plant J's Seed",
                seedPrice: 5,
                identity: 9
            },
            {
                seedName: "Plant K's Seed",
                seedPrice: 5,
                identity: 10
            },
            {
                seedName: "Plant L's Seed",
                seedPrice: 5,
                identity: 11
            },
            {
                seedName: "Plant M's Seed",
                seedPrice: 5,
                identity: 12
            },
            {
                seedName: "Plant N's Seed",
                seedPrice: 5,
                identity: 13
            },
            {
                seedName: "Plant O's Seed",
                seedPrice: 5,
                identity: 14
            },
            {
                seedName: "Plant P's Seed",
                seedPrice: 5,
                identity: 15
            }
        ],
        pots: [
            {
                potName: "Plant Pot 0",
                potPrice: 10,
                identity: 0
            },
            {
                potName: "Plant Pot 1",
                potPrice: 10,
                identity: 1
            },
            {
                potName: "Plant Pot 2",
                potPrice: 10,
                identity: 2
            },
            {
                potName: "Plant Pot 3",
                potPrice: 10,
                identity: 3
            },
            {
                potName: "Plant Pot 4",
                potPrice: 10,
                identity: 4
            },
            {
                potName: "Plant Pot 5",
                potPrice: 10,
                identity: 5
            },
            {
                potName: "Plant Pot 6",
                potPrice: 10,
                identity: 6
            },
            {
                potName: "Plant Pot 7",
                potPrice: 10,
                identity: 7
            },
            {
                potName: "Plant Pot 8",
                potPrice: 10,
                identity: 8
            },
            {
                potName: "Plant Pot 9",
                potPrice: 10,
                identity: 9
            }
        ],
        land: 50, // 50$ per 1 unit
        water: 5, // 5$ per 10 unit. Each click you buy 10 buckets of water
        paper: 10 // 10$ per 1 unit.
    },
    greetingsPresets: [ // If a plant's speciality is "chat", then it will retrieve the greetings from here
        "HI! HOW ARE YOU TODAY?",
        "I LIKE YOU, DO YOU LIKE ME?",
        "WHAT IS BOTANICA? BOTANICA IS THIS EPIC BOTANICA I AM LIVING IN!",
        "DON'T FORGET TO WATER ME OFTEN :)",
        "ONCE I AM FULLY GROWN, I CAN PRODUCE FRUITS!",
        "HAVE YOU LEARNT ANYTHING NEW TODAY?",
        "EVERYDAY IS A NEW DAY.",
        "MANY OF US HAVE SPECIAL ABILITIES!",
        "DO YOU LIKE TO PLAY WITH ME?",
        "I LIKE BEES, I LIKE BEES :)",
        "AN APPLE A DAY KEEPS THE DOCTOR AWAY.",
        "DO YOU KNOW WHAT HELLO WORLD MEANS?",
        "WELCOME TO BOTANICA!",
        "WATER IS VERY IMPORTANT TO EVERYONE OF US.",
        "YOU CAN SELL FRUITS TO EARN COINS!",
        "HA HA HA HA......",
        "HEY! YOU'RE BACK!",
        "I AM A LITTLE LITTLE HAPPY PLANT :D",
        "I AM GOOD AT VUE AND REACT, WHAT ABOUT YOU?",
        "CAN YOU TELL ME YOUR STORY?",
        "SUNSHINE IS ALWAYS IN YOUR HEART!",
        "GOD BLESS YOU ~~",
        "AM I BEAUTIFUL?",
        "IF YOU BUY A NEW SEED, IT MAY COME WITH A SPECIAL ABILITY!",
        "I LOVE THIS FLOWER POT SO MUCH.",
        "Zzzz...... Zzzz......",
        "(✿◡‿◡) THANK YOU :)",
        "(o゜▽゜)o☆ BIU BIU BIU ~~",
        "(。・∀・)ノ HI~~ DON'T FORGET TO HARVEST FRUITS~~",
        "(✿◕‿◕✿) THE ART OF THINKING LOGICALLY AND PHILOSOPHICALLY...",
        "(⊙_⊙)？WHAT ARE YOU DOING?",
        "╰(*°▽°*)╯ WOW THIS IS GREAT!",
        "ヾ(＠⌒ー⌒＠)ノ HAPPINESS IS THE INHERENT THING FLOWING OUT OF YOUR HEART.",
        "(●'◡'●) HI~ AM I LOVELY?",
        "(๑•̀ㅂ•́)و✧ I WISH YOU ALL THE BEST!"
    ],
    userData: {
        // upon creating a new plant, it will randomly get one of the following 4 special abilities:
        // special ability identifier strings(case sensitive): 
        // "chat", "news", "weather", "joke"
        plantPotList: [ // This array represents all the plantPots in the garden that the user owns
            // Each element in the plantPotList array has the following structure
            // {
            //     potIdentity: 0, // used to locate pot category in the pot presets and retrieve data
            //     plantIdentity: 0, // used to locate plant category in the plant presets and retrieve data
            //     positionAtCurrentArray: 0, // this is used to locate the current object in the plantPotList
            //     customName: "Custom name", // a custom name given by the user upon creating a new plant
            //     speciality: "chat",
            //     // an index number dictating the current life stage, 0 means seed stage
            //     lifeStagePointer: 0,
            //     // the time elapsed at the current life stage, once it reaches the corresponding
            //     // life stage time needed for next stage, the plant will proceed to next stage
            //     growingTime: 0,
            //     currentHydration: 99,
            //     currentYield: 5,
            //     messageArray: []
            // }
        ],
        diaryList: [
            // Each element in the diaryList array has this type of data structure
            // {
            //     diaryTitle: "A diary title",
            //     diaryDateStr: "A diary date",
            //     diaryDateMilliSec: 105645343156,
            //     diaryContent: "This is diary content..."
            // }
        ],
        // [plantA seed count, plantB seed count, ..., plantP seed count]
        // 每个元素对应不同种子类别，从 A 到 P。元素的值代表拥有该类别种子的数量。
        ownedSeeds: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // [pot0 count, pot1 count, ..., pot9 count]
        // 每个元素对应不同盆子类别，从 pot0 到 pot9。元素的值代表拥有该类别盆子的数量。
        ownedPots: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        // [plantA fruit count, plantB fruit count, ..., plantP fruit count]
        // 每个元素对应不同果实类别，从 A 到 P。元素的值代表拥有该类别果实的数量。
        ownedFruits: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ownedCoins: 900, // The game coins/money that the player owns, can be used to buy things
        ownedPaper: 0, // The diary paper the player owns, can be used to write diary
        ownedWater: 100, // The buckets of water the player owns, can be used to water plants
        ownedLandMax: 30, // defines the total land pieces the user owns, once increased, it will stay
    }
};