// IMPORTANT STUFF - STORY INPUTS 
// IMPORTANT: In "choices", the 'nextIndex' refers to the array position (0, 1, 2...).
    const storyScript = [
        // 0: Intro
        {
            music: "music/scene 1.mp3",
            bg: "bg/farm.jpg", 
            sprite: "",
            name: "", 
            text: "Today is campaign day. It is important to get to know the candidates to see what they will do inside your country. Sa pangyayari na ito, dito mo malalaman kung ano ang nais nila iparating, at kung ano ang gusto nilang gawin sa ating bansa."
        },
        // 1
        {
            transition: 'none',
            bg: "bg/house.jpg",
            sprite: "", // Keep empty so the main character doesn't block the candidates
            name: "",
            lines: [
                "The candidates will roam around your village, giving you a chance to get to know each one of them. Will they be able to accomplish the things they are saying? Or puro lang sila salita?",
                "Which candidate do you want to get to know first?",
            ],
                // The image selection array
            imageChoices: [
                { img: "sprites/pig.png", name: "Bob Uy Jr.", hoverColor: "red", nextIndex: 2 },
                { img: "sprites/goat.png", name:"Ka Ambing", hoverColor: "pink", nextIndex: 3 },
                { img: "sprites/dog.png", name: "Brownie Moleno", hoverColor: "blue", nextIndex: 4 },
                { img: "sprites/crocodile.png", name: "Krok O. Dayle alyas Boy Kagat", hoverColor: "yellow", nextIndex: 5 }
            ],
        },
        
        // 2: Pig Platforms
        {
            music: "music/candidate bob uy.mp3",
            transition: 'none',
            bg: "bg/court.jpg", 
            sprite: "sprites/pig.png",
            name: "", 
            lines: ["The pig is proper, popular, and has been in the government for 20 years.",
                {
                    text: "Good morning ladies and gentlemen. I'm sure you know who I am. For everyone who doesn't, I am Bob Uy Jr., your strong and independent leader. I'm sure you've all heard the good things I've done.",
                    newName: "Bob Uy Jr."
                },
                "I reduced crime rates in my city of Babuyan from 40% to 10%. And we would've never done that without our Oink Squad, a team of seasoned policemen that roams the city.",
                "When I become President, I will promise that I will drop the crime rates to 0%. The city will be clean and quiet, and anyone who dares to pursue a crime will meet their judgment.",
                "Ubusin natin ang mga $%*&*^@!ng yan. Vote for Bob Uy Jr., vote for Justice.",
            ],
            choices: [
                { text: "Get to know the other candidates.", nextIndex: 1 }, 
                { text: "Move on.", nextIndex: 6 }  
                ]
        },
        // 3: Goat Platform
        {
            music: "music/candidate ka ambing.mp3",
            transition: 'none',
            bg: "bg/court.jpg", 
            sprite: "sprites/goat.png",
            name: "", 
            lines: ["The goat is classy, but charming at times, knows her people and hears them.",
                    {
                    text: "GoOoOoOD moOorNing, kumain na ba ang lahat?",
                    newName: "Ka Ambing"
                },
                "Para sa umagang ito, bibigyan natin ng importansya ang ating mga magsasaka, at mga mangigisda, may inihandang salu-salo ang mga volunteers natin para sa lahat ng mga pumunta, gamit ang bigas at isda ng ating mga magsasaka't mangingisda.",
                "Palakpakan naman para sa kanila, parte sila ng ating proyekto na LupAaAaA't Tubig na layunin bigyan ng sariling lupang sakahan at fish ponds ang ating mga magsasaka't mangingisda.",
                "Sa ngayon ay nakapagbigay na tayo sa 35 na magsasaka at 12 na mangingisda ng kanilang sariling lupa at lawa.",
                "Kapag tayo'y nanalo siguraduhin niyong mas dadami ito dahil naniniwala ako na sa hapag-kainan nagsisimula ang pagbabago, karapatan lang ng lahat na makakain tatlong beses sa isang araw.",
                "Marami pang proyekto ang gusto namin isulong, kailangan lang namin ng tulong niyo, ang taong-bayan. Maraming salamat po, EaEaEat weEeEeell!",
            ],
            choices: [
                { text: "Get to know the other candidates.", nextIndex: 1 }, 
                { text: "Move on.", nextIndex: 6 }  
                ]
        },
        // 4: Dog Platform
        {
            music: "music/candidate aso.mp3",
            transition: 'none',
            bg: "bg/court.jpg",
            sprite: "sprites/dog.png",
            name: "", 
            lines: ["The dog is proud, confident, and knows how to talk to a crowd.",
                {
                    text: "ARFFF! Magandangggggg magandang umaga po mga kapatid. Isang palakpakan naman diyan, ang ganda naman masilayan ang ngiti sa mga muka niyo. Ehey? Eheyyyy!",
                    newName: "Brownie Moleno"
                },
                "Ia-announce ko pala na sa pagdating ko meron tayong libreng sapatos para sa ating mga estudyante at siyempre libreng pa-pustiso para sa ating mga lolo't lola, meron ding libreng gupit para sa ating mga maton. O sya para makapagsimula na, isang malakas na IHH AMBANGIS muna dyan.",
                {
                    text: "IHHHH AMBANGISSSS",
                    newName: "Crowd"
                },  

                {
                text: "Magaling ahh, parang kayo ang favorite ko na barangay dito. Nga pala pag tayo ang nanalo, itutuloy tuloy natin ang mga ngayo'y nagawa na, simula sa libreng pa-almusal tuwing sabado at sa cleanup drives tuwing Linggo.",   
                newName: "Brownie Moleno"
            },
            "Siyempre magtutuloy-tuloy lang yan dahil sa pagmamahal niyo at dahil sainyong pambansang kuya, Kuya Brownie Moleno! Isang Ehey nga diyan? Ehey? Eheyyyyyy!!",
            "Maraming salamat po, mahal ko kayong lahats.",
            ],
            choices: [
                { text: "Get to know the other candidates.", nextIndex: 1 }, 
                { text: "Move on.", nextIndex: 6 }  
                ]
        },
        // 5: Crocodile Platform
        {
            music: "music/candidate kroks.mp3",
            transition: 'none',
            bg: "bg/court.jpg",
            sprite: "sprites/crocodile.png",
            name: "", 
            lines: ["The crocodile is charismatic, humorous and quick-witted.",
                {
                    text: "MAGANDANG UMAGA MGA KABABAYAN! RAGHAHAHAHA",
                    newName: "Krok O. Dayle alyas Boy Kagat"
                },
                "Ang gaganda't popogi naman ng mga pumunta, nakakuha na ba kayo ng libreng jacket sa likod? Ayun naman, isang masigabong palakpakan nga diyan!",
                "Huwag muna kayo umalis ha dahil may special surprise tayo sa dulo ng bisita kong ito. Secret muna pero espesyal yan dahil alam niyo namang mahal ko kayong lahat.",
                "Pinapangako ko na kapag napanalo natin to, tatanggalin natin ang lahat ng korap sa gobyerno. Perwisyo yang mga korap na yan! RAGHAHAHAHA",
                "TAMA? Sisiguraduhin din natin na kapag nanalo ako, mawawala ang kahirapan sa bansang to!",
                "Marami akong projects na gagawin tulad nalang ng BawalKurap Project, nakita niyo ba yun sa balita, napakulong ko last week ang mga involved sa Farm Scam.",
                "BAWAL MAGNANAKAW! RAGHAHAHAHA, iboto niyo ko maraming salamat!",
            ],
            choices: [
                { text: "Get to know the other candidates.", nextIndex: 1 }, 
                { text: "Move on.", nextIndex: 6 }  
                ],
        },
        // 6: Fade to Scene 4
        {
            bg: "black",
            sprite: "",
            name: "",
            text: "It is the day of the Voter's Registration.",
        
        },
        // 7: Start of Scene 4
        {
            music: "music/scene 4.mp3",
            transition: 'none', 
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "Get registered now! Firstly, head to the nearest COMELEC office."
        },
        // 8: Continuation
        { 
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "Welcome, you may register now as a voter. We would like for you to provide your valid ID for the registration form.",
            choices: [
                { text: "Give a valid ID with your photograph and signature.", nextIndex: 9 }, 
                ],
        },
        // 9: Continue
        {
            transition: 'none',
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "They then gave you a copy of the prescribed application form.",
            choices: [
                { text: "Take it, answer it, and submit it to the election officer.", nextIndex: 10 }, 
                ],
        },
        // 10: more continuation
        {
            transition: 'none',
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "They hand your application form back with the application form number. They're now ready to take your biometrics with the VRM Officer.",
            choices: [
                { text: "Take the application form and take your biometrics.", nextIndex: 11 }, 
                ],
        },
        // 11
        {
            transition: 'none',
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "They affix your signature on the appropriate space in the form in front of the election officer.",
            choices: [
                { text: "Make sure your affixed signature is right and appropriate.", nextIndex: 12 }, 
                ],
        },
        //12 
        {
            transition: 'none',
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "The officer is asking for your application form.",
            choices: [
                { text: "Submit the form.", nextIndex: 13 }, 
                ],
        },
        // 13
        {
            transition: 'none',
            bg: "bg/barangay.png",
            sprite: "",
            name: "",
            text: "They hand you the acknowledgement receipt and proof of filing.",
            choices: [
                { text: "Take it and go home.", nextIndex: 14 }, 
                ],
        },
        // 14: VOTING DAY
        {
            bg: "black",
            sprite: "",
            name: "",
            text: "It is the voting day!",
        },
        // 15
        {
            music: "music/scene 6.mp3",
            transition: 'fade',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            lines: ["Hazza! It's voting day. Get ready to vote for your candidate!",
                "First step before voting, go to your assigned polling precinct.",
                "If you don't know your precinct number, head over to the Voter's Assistance Desk (VAD). They'll help you find it.",
                "Then, be prepared to confirm your identity. Bring your valid ID to prove your identity!",
                "If you are ready, should we head to your Precinct?"
            ],
            choices: [ 
                { text: "Yes, I'm ready to head to school.", nextIndex: 16},
            ]
        },
        // 16
        {
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            text: "Head towards the assigned polling precinct and wait for your turn.",
            choices: [ 
                { text: "Go to the assigned polling precinct.", nextIndex: 17},
            ]
        },
        // 17
        {
            transition: 'none',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            lines: ["You are now in line in the holding area.",
                "Once you reach the board of election inspectors. They will ask for your name, ID, and precinct number.",
            ],
            choices: [ 
                { text: "Give your name, ID, and precinct number.", nextIndex: 18},
            ]
        },
        //18 
        {
            transition: 'none',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            text: "After confirming your identity, you then get your ballot, ballot secrecy folder, and marker.",
        
            choices: [ 
                { text: "Take your ballot, ballot secrecy folder, and marker.", nextIndex: 19},
            ]
        },
        //19 
        {
            transition: 'none',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            lines: ["You may now head to the voting area and vote wisely.",
                "It's time to vote for your presidential candidate.",
                "Which candidate will you vote for the Presidency?",
            ],
            saveVote: true,
            imageChoices: [
                { img: "sprites/pig.png", name: "Bob Uy Jr.", hoverColor: "red", nextIndex: 20 },
                { img: "sprites/goat.png", name:"Ka Ambing", hoverColor: "pink", nextIndex: 20 },
                { img: "sprites/dog.png", name: "Brownie Moleno", hoverColor: "blue", nextIndex: 20 },
                { img: "sprites/crocodile.png", name: "Krok O. Dayle alyas Boy Kagat", hoverColor: "yellow", nextIndex: 20 }
            ],
        },
        // 20
        {
            transition: 'none',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            text: "After voting, you may go near the vote-counting machine, and return the ballot secrecy folder and marker.",
            choices: [ 
                { text: "Feed your ballot into the vote-counting machine. And return the ballot secrecy folder and marker.", nextIndex: 21},
            ]
        },
        // 21
                {
            transition: 'none',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            lines: ["Now wait for the receipt to print and let the precinct supervisor cut your receipt from the machine.",
                "They ask for your right forefinger to be marked with indelible ink.",
                "Afterwards, they will give you your cut receipt to verify your vote.",
            ],
            choices: [ 
                { text: "Give your forefinger to get marked and take your voter's receipt and verify your vote.", nextIndex: 22},
            ]
        },
        // 22 
        {
            transition: 'none',
            bg: "bg/school.jpg",
            sprite: "",
            name: "",
            text: "Yey, now you may drop the receipt in the receptacle beside the VCM provided by COMELEC to complete your vote.",
            choices: [ 
                { text: "Drop it and then leave.", nextIndex: 23},
            ]
        },
        //23
        {
            bg: "bg/house.jpg",
            sprite: "",
            name: "",
            text: "A day passes and The TV shows the percentage of the voting. The candidate that you voted for have won!",
        },
        // 24
        {
            music: "music/scenes 7-8.mp3",
            bg: "bg/house.jpg",
            sprite: "",
            name: "",
            text: "How did your candidate's presidential run go?",
            checkOutcome: true,
        },
        //25 Bob Uy Jr. Ending
        {
            bg: "bg/malacanang.jpg",
            sprite: "sprites/pig.png",
            name: "Bob Uy Jr. Ending",
            lines: ["He quickly implemented the Oink Squad by deploying teams to scour each city, searching for criminals. Putting fear to most people at the start.",
                "Nationwide crime rates went from 35% to 15%. Receiving praise from many.",
                "This didn't last long as voices reached the surface, most of the criminals were either framed, innocent, or killed on the spot.",
                "Speculations filled the press and criticisms were thrown at Bob Uy Jr.",
                "After hearing this, Bob Uy Jr. declared a nationwide Pig Law, which mandates that any criticisms at the President will be deemed as terrorism and any individual who won't abide will face jail time.",
            ],
            nextIndex: 26,
        },
        // 26
        {
            bg: "black",
            sprite: "sprites/pig.png",
            name: "Bob Uy Jr. Ending",
            text: "His presidential run lasted for 10 years before dying due to cholesterol.",
            nextIndex: 33,
        },
        //27 Ka Ambing Ending
        {
            bg: "bg/malacanang.jpg",
            sprite: "sprites/goat.png",
            name: "Ka Ambing Ending",
            lines: ["Right after winning, she focused on implementing the LupAaAaA't Tubig Project, 154 farmers and 98 fishermen were given their own land and fish ponds in her first year.",
                "Inflation went down as the agriculture in the country flourished. Rice, crops, and fish prices went down.",
                "Later on, her LupAaAaA't Tubig Project was a success, giving food to many, lowering poverty and hunger.",
            ],
            nextIndex: 28,
        },
        // 28
        {
            bg: "black",
            sprite: "sprites/goat.png",
            name: "Ka Ambing Ending",
            text: "We now know, focusing on our fellow farmers and fishermen was the key to the nation's prosperity.",
            nextIndex: 33,
        },
        //29 Brownie Moleno Ending
        {
            bg: "bg/malacanang.jpg",
            sprite: "sprites/dog.png",
            name: "Brownie Moleno Ending",
            lines: ["He started his run by ordering a cleanup drive in every city. He made sure that curfew is mandatory in the whole country.",
                "Later on in his presidential run, he became complacent, no further changes have progressed.",
                "For a new light, he made a union with the U.S. but it didn't end well as it only drove the inflation upwards.",
            ],
            nextIndex: 30,
        },
        // 30
        {
            bg: "black",
            sprite: "sprites/dog.png",
            name: "Brownie Moleno Ending",
            text: "He does well in the press but falls flat in serving the nation.",
            nextIndex: 33,
        },
        //31 Krok O. Dayle alyas Boy Kagat Ending
        {
            bg: "bg/malacanang.jpg",
            sprite: "sprites/crocodile.png",
            name: "Krok. O Dayle alyas Boy Kagat Ending",
            lines: ["In his first year, he exposed five corrupt senators, receiving praise from the country.",
                "Receiving admiration, he continues to catch and expose as many corrupted officials as possible.",
                "Later on, he was exposed that he was framing these charges, revealing that he protects the true corrupted officials and sets up the ones that are not on his side.",
            ],
            nextIndex: 32,
        },
        // 32
        {
            bg: "black",
            sprite: "sprites/crocodile.png",
            name: "Krok O. Dayle alyas Boy Kagat Ending",
            text: "He was charged for multiple felonies, immediately impeached by his 4th year.",
            nextIndex: 33,
        },
        // 33 FINAL ENDING
        {
            bg: "black",
            sprite: "",
            name: "",
            text: "The End.",
        },
    ];

// ELEMENTS 
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startBtn = document.getElementById('start-btn');
const dialogueBox = document.getElementById('dialogue-box');
const bgLayer = document.getElementById('background-layer');
const charLayer = document.getElementById('character-layer');
const charImg = document.getElementById('character-img');
const nameLabel = document.getElementById('speaker-name');
const textLabel = document.getElementById('dialogue-text');
const nextIndicator = document.getElementById('next-indicator');
const choicesContainer = document.getElementById('choices-container');
const fadeOverlay = document.getElementById('fade-overlay');
const returnBtn = document.getElementById('return-btn');
const gameData = {
    electedCandidate: null, // This will store the name of the candidate the player chose
};
const endingMap = {
    "Bob Uy Jr.": 25, 
    "Ka Ambing": 27, 
    "Brownie Moleno": 29,     
    "Krok O. Dayle alyas Boy Kagat": 31,
};
const bgmAudio = document.getElementById('bgm-audio');

// VARIABLES

let currentIndex = 0;
let isTyping = false;
let typeTimeout;
let currentFullText = "";
let currentLineIndex = 0; // Tracks which line in the 'lines' array we are on
let currentSceneLines = []; // Holds the array of lines for the active scene
let storyHistory = [];
let currentMusic = null;

// FUNCTIONS 
//history
function saveHistory(indexToSave) {
    // Only save the index if it's different from the last one (prevents duplicate saves)
    if (storyHistory.length === 0 || storyHistory[storyHistory.length - 1] !== indexToSave) {
        storyHistory.push(indexToSave);
    }
    // Show the button if history exists
    returnBtn.style.display = storyHistory.length > 0 ? 'block' : 'none';
}
function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    currentIndex = 0;
    renderScene();
}

function playMusic(musicFile) {
    // If no music file specified, do nothing
    if (!musicFile) return;
    
    // If it's the same music already playing, don't restart it
    if (currentMusic === musicFile && !bgmAudio.paused) {
        return;
    }
    
    // Update current music tracker
    currentMusic = musicFile;
    
    // Set the audio source and play
    bgmAudio.src = musicFile;
    bgmAudio.volume = 0.5; // Set volume (0.0 to 1.0)
    bgmAudio.play().catch(error => {
        console.log("Audio play failed:", error);
    });
}

function stopMusic() {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
    currentMusic = null;
}

function fadeOutMusic(duration = 1000) {
    const startVolume = bgmAudio.volume;
    const fadeStep = startVolume / (duration / 50); // 50ms intervals
    
    const fadeInterval = setInterval(() => {
        if (bgmAudio.volume > fadeStep) {
            bgmAudio.volume -= fadeStep;
        } else {
            bgmAudio.volume = 0;
            bgmAudio.pause();
            clearInterval(fadeInterval);
        }
    }, 50);
}
//return
function goBack() {
    if (storyHistory.length > 0) {
        // 1. Stop any currently running effects (typing, fading)
        clearTimeout(typeTimeout); 
        fadeOverlay.style.opacity = 0;
        dialogueBox.style.pointerEvents = 'auto'; 
        
        // 2. Get the last scene index from history
        const previousIndex = storyHistory.pop();
        currentIndex = previousIndex;
        
        // 3. Reset line tracking (always go back to the start of the scene)
        currentLineIndex = 0;
        currentSceneLines = []; // This will be reset again in renderScene, but good practice
        
        // 4. Render the previous scene
        renderScene();
    }
    // Hide the button if history is empty
    returnBtn.style.display = storyHistory.length > 0 ? 'block' : 'none';
}

function checkOutcomeAndJump() {
    const candidate = gameData.electedCandidate;

    // Check if a candidate was saved and exists in the map
    if (candidate && endingMap[candidate] !== undefined) {
        currentIndex = endingMap[candidate]; // Forces jump to the correct ending index
    } else {
        // Fallback for players who reached the end without voting
        console.error("No valid candidate selected. Defaulting to index 99.");
        currentIndex = 33; // Fallback ending scene index
    }
    
    // Now render the chosen ending scene
    renderScene();
}

// Helper function to update all visual elements immediately
function swapContent(scene) {
     // Setup Visuals
    nameLabel.innerText = scene.name;

    // Background (Use the logic you already set up)
    if (scene.bg.startsWith('#') || scene.bg.startsWith('rgb')) {
        bgLayer.style.backgroundColor = scene.bg;
        bgLayer.style.backgroundImage = 'none';
    } else if (scene.bg.includes('gradient')) {
        bgLayer.style.background = scene.bg;
    } else {
        bgLayer.style.backgroundImage = `url("${scene.bg}")`;
        bgLayer.style.backgroundSize = "cover";
        bgLayer.style.backgroundPosition = "center";
    }

    // Sprite
    if (scene.sprite) {
        charLayer.style.display = 'block';
        charImg.src = scene.sprite;
    } else {
        charLayer.style.display = 'none';
    }

    // Hide choices initially and clear old buttons
    choicesContainer.style.display = 'none';
    choicesContainer.innerHTML = ''; 
}

// RESPONSIVE FUNCTIONS // 
// Responsive Detection
function isPhone() {
    return window.innerWidth <= 700;
}
function isTablet() {
    return window.innerWidth > 700 && window.innerWidth <= 1100;
}
function isDesktop() {
    return window.innerWidth > 1100;
}

// RENDER FUNCTION !!! IMPORTANT // 
function renderScene() {
        if (currentIndex >= storyScript.length) {
            alert("The End. Restarting.");
            location.reload(); 
            return;
        }

        const currentScene = storyScript[currentIndex];
        
        // CHECK: Should this scene appear instantly or with a fade?
        const shouldFade = currentScene.transition !== 'none';

        if (shouldFade) {
            // --- A. FADE TRANSITION ---

            // 1. FADE OUT
            fadeOverlay.style.opacity = 1; 
            dialogueBox.style.pointerEvents = 'none'; // Disable clicks

            // Wait for the fade out to finish (500ms)
            setTimeout(() => {
                
                // 2. SWAP CONTENT (Behind the black screen)
                swapContent(currentScene);
                
                // MUSIC
                if (currentScene.music) {
                playMusic(currentScene.music);
                 }
                // 3. FADE IN
                fadeOverlay.style.opacity = 0;
                
                // Wait briefly for the fade in to start (100ms)
                setTimeout(() => {
                    dialogueBox.style.pointerEvents = 'auto'; // Re-enable clicks
                    // NEW: Check for multi-line scenes the same way the non-fade branch does
                if (currentScene.lines && Array.isArray(currentScene.lines)) {

                    currentSceneLines = currentScene.lines.filter(line =>
                        line !== undefined && line !== null && line !== ""
                    );

                    currentLineIndex = 0;

                    if (currentSceneLines.length > 0) {
                        startTypewriter(currentSceneLines[0]);
                    } else {
                        finishTyping();
                    }

                        } else {
                    // Default: single text mode
                    startTypewriter(currentScene.text || "");
                }


                }, 100); 

            }, 500); // MUST match the transition time set in CSS (0.5s)

        } else {
            // --- B. INSTANT TRANSITION ---
            // If transition is 'none', update content and start typing immediately
            swapContent(currentScene);

            if (currentScene.music) {
            playMusic(currentScene.music);
            }
            dialogueBox.style.pointerEvents = 'auto';

        // --- NEW LOGIC CHECK ---
        // Check if the scene uses the new 'lines' array
            if (currentScene.lines && Array.isArray(currentScene.lines)) {
                currentSceneLines = currentScene.lines.filter(line => 
            // Keep only elements that are not null, not undefined, and not an empty string
            line !== undefined && line !== null && line !== ""
            );   
            currentLineIndex = 0;

            if (currentSceneLines.length > 0) {
                startTypewriter(currentSceneLines[currentLineIndex]); 
            } else {
                // If the lines array was empty after filtering, just show the choices/proceed.
                finishTyping(); 
            }
            } else {
                // Falls back to the old 'text' property for compatibility
                startTypewriter(currentScene.text || "");
        }
    }
}
function startTypewriter(lineData) {
        nextIndicator.style.display = "none";
        isTyping = true;
        
        let textToType = '';
        
        // --- NEW LOGIC: Check if lineData is an object ---
        if (typeof lineData === 'object' && lineData !== null) {
            // If it's an object, check for a new name
            if (lineData.newName) {
                nameLabel.innerText = lineData.newName; // Apply the new name
            }
            textToType = lineData.text; // Get the text from the object
        } else {
            // If it's just a string, use it directly (backwards compatibility)
            textToType = lineData;
        }
        
        currentFullText = textToType; // Store the full text for skip

        // Clear the dialogue text container
        textLabel.innerText = ''; 
        let charIndex = 0;

        // The rest of the typewriter logic remains the same:
        function typeChar() {
            if (charIndex < currentFullText.length) {
                textLabel.innerText += currentFullText.charAt(charIndex);
                charIndex++;
                typeTimeout = setTimeout(typeChar, 40); // Standard typing speed
            } else {
                finishTyping();
            }
        }
        typeChar();
    }

function finishTyping() {
        clearTimeout(typeTimeout);
        textLabel.innerText = currentFullText;
        isTyping = false;
        
        // The only job of finishTyping is now to show the next indicator.
        nextIndicator.style.display = "block"; 
    }

    function showChoices(choices) {
        nextIndicator.style.display = "none";
        choicesContainer.classList.remove('image-choice-mode');
        choicesContainer.style.display = "flex";

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.innerText = choice.text;
            btn.classList.add('choice-btn');
            btn.onclick = (e) => {
                e.stopPropagation(); // Prevent clicking through to the dialogue box
                saveHistory(currentIndex);
                currentIndex = choice.nextIndex;
                renderScene();
            };
            choicesContainer.appendChild(btn);
        });
    }

    function handleBoxClick() {
        // 1. If currently typing, finish instantly
        if (isTyping) {
            finishTyping();
            return;
        }

        // 2. If choices are visible, ignore click
        if (choicesContainer.style.display === 'flex') {
            return;
        }

        const currentScene = storyScript[currentIndex];

        // 3. Multi-Line Progression Check: ...
        if (currentSceneLines.length > 0 && currentLineIndex < currentSceneLines.length - 1) {
            
            currentLineIndex++; 
            nextIndicator.style.display = "none"; 
            
            // --- UPDATED LINE BELOW ---
            // Pass the entire array element (object or string) to startTypewriter
            startTypewriter(currentSceneLines[currentLineIndex]); 
            // --- END UPDATED LINE ---
            
            return; 
        }
        // 4. CHOICE CHECK: This code ONLY runs when the last line has been finished/clicked.
        
        // Check for normal text choices
        if (currentScene.choices) {
            showChoices(currentScene.choices);
            return; // Stop progression, wait for the player to click a choice button
        } 
        
        // Check for image choices
        if (currentScene.imageChoices) {
            showImageChoices(currentScene.imageChoices);
            return; // Stop progression, wait for the player to click a choice image
        }

        if (currentScene.checkOutcome === true) {
            // Execute the jump logic instead of advancing normally
            checkOutcomeAndJump();
            return; // STOP normal progression
        }
        
        // 5. NORMAL SCENE ADVANCEMENT: Only runs if no lines were left AND no choices were found.

       saveHistory(currentIndex); 

        if (currentScene.nextIndex !== undefined) {
            currentIndex = currentScene.nextIndex;
        } else {
            currentIndex++;
        }
        
        // Reset line tracking for the new scene
        currentLineIndex = 0; 
        currentSceneLines = [];
        
        renderScene();
    }

function showImageChoices(choices) {
    nextIndicator.style.display = "none";
    choicesContainer.innerHTML = "";
    choicesContainer.classList.add('image-choice-mode'); // Add the class for CSS styling
    choicesContainer.style.display = "flex";

    const currentScene = storyScript[currentIndex];

    // Build buttons
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "img-choice-btn";

        const img = document.createElement("img");
        img.src = choice.img;
        img.alt = choice.name || "Candidate";

        const tooltip = document.createElement("div");
        tooltip.className = "candidate-name-tooltip";
        tooltip.innerText = choice.name || "Candidate";

        btn.appendChild(img);
        btn.appendChild(tooltip);

        // Hover/touch effects
        const defaultFilter = "drop-shadow(0 0 5px rgba(0,0,0,0.5))";
        const glow = `drop-shadow(0 0 15px ${choice.hoverColor || "gold"})`;

        btn.onmouseenter = () => { img.style.filter = glow; };
        btn.onmouseleave = () => { img.style.filter = defaultFilter; };

        // Touch highlight (keeps it snappy on mobile)
        btn.ontouchstart = (e) => { 
            e.preventDefault(); // Prevent double-tap zoom
            img.style.transform = "scale(1.03)"; 
        };
        btn.ontouchend = () => { img.style.transform = "scale(1)"; };

        // Click handler
        btn.onclick = (e) => {
            e.stopPropagation();
            saveHistory(currentIndex);

            if (currentScene && currentScene.saveVote === true) {
                gameData.electedCandidate = choice.name;
            }

            // cleanup and advance
            choicesContainer.innerHTML = "";
            choicesContainer.style.display = "none";
            choicesContainer.classList.remove("image-choice-mode");

            currentIndex = choice.nextIndex;
            renderScene();
        };

        choicesContainer.appendChild(btn);
    });
}


    // 4. Event Listeners
    startBtn.addEventListener('click', startGame);
    dialogueBox.addEventListener('click', handleBoxClick);
    returnBtn.addEventListener('click', goBack);