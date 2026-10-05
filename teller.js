const fortunes = [
    "A great finacial wind blows your way ",
    "beware of trickster hiding behind a smile",
    "An unexpected email will alter your week",
    "The stars alihn to grant you a hidden power",
    "A long-lost friend will return with a scret",
    "Your creativity will unlock a gloden door",
    "Love is closer than you think,look to east",
    "A shadow follows you,but you must be bold enough to answer",
    "Your destiny is not written ,you are the writer",
];

let pastREadings = [];
// Task 3 & 4: Destiny Teller + 3-Card Spread
document.getElementById("destinyForm").addEventListener("submit", function(Event){
    Event.preventDefault();
    // Your code for handling the form submission goes here

    const name = document.getElementById("userName").value.trim();
    const Zodiac = document.getElementById("Zodiac").value;

    //Validation with if/else
    if (name === ""){
        alert("Please input your name to revel your fate!");
        return;
    }
    if (Zodiac === ""){
        alert("Please select your Zodiac sign!");
        return;
    }

    //Custom luck score 1-100
    const luckScore = Math.floor(Math.random() * 100) + 1;

    //Tenary operator
    let status = luckScore > 50 ? "Blessed" : "Cursed";

    //pick 3 distinct fortunes using array methods
    let shuffled = [...fortunes] .sort(() => 0.5 - Math.random());
    let threeCards = shuffled.slice(0,3);

    //Display personalized summary + caeds via DOM maipulation
    document.getElementById("destinyresult") .innerHTML = `
        <h3>Hello $ {name} [${Zodiac}]</h3>
        <p>☄️Cosmic Luck Score: <strong>${luckScore}/100</strong> -
        <span style="color: ${status === 'Blessed'?'#d4af37':'#ff5555'}">${status}</span></p>
        <div class="cards-container">
         <div class="tarot-card"><strong>Past:</strong> ${threeCards[0]}</div>
         <div class="tarot-card"><strong>Present:</strong> ${threeCards[1]}</div>
         <div class="tarot-card"><strong>Future:</strong> ${threeCards[2]}</div>
        </div>
    `;

  // Save to history array
  let reading = `${name} (${Zodiac}) - $ {luckScore} : ${threeCards.join(" |")}`;
  pastReadings.push(reading);
  console.log("Past Readings");

});

 // Fortune Archive Search
const fortuneList = document.getElementById("fortuneList");
function displayFortunes(list = fortunes){
    fortuneListDiv.innerHTML = list.map(f => `<p>🌏 ${f}</p>`) .join("");
} 
displayFortunes();

// Search with find() + includes() + bonus tolowerCase()
document.getElementById("searchBtn").addEventListener("click", function(){
    let keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    if (keyword === ""){alert("Type a keyword!"); return;}

    let found = fortunes.find(f => f.toLowerCase().includes(keyword));

    let res = document.getElementById("archiveResult");
    if (found){
        res.innerHTML = `<p "style="color: #d4af37">Found: ${found}</p>`;
    } else {
        res.innerHTML = `<p style="color: #ff5555">No fortune contains "${keyword}"</p>`;
    }
});

//Sort with sort()
document.getElementById("sortBtn").addEventListener("click", function(){
    let sorted = [...fortunes].sort();
    displayFortunes(sorted);
    document.getElementById("archiveResult").innerHTML = `<p>Archive sorted A-Z </p> `;
});