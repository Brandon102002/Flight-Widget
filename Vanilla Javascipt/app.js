const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "01:53",
        destination: "LAX",
        flight: "J7683",
        gate: "A12",
        status: "ON TIME",
    },
    {
        time: "02:06",
        destination: "SFO",
        flight: "GN231",
        gate: "B03",
        status: "DELAYED",
    },
    {
        time: "02:47",
        destination: "BUR",
        flight: "F9H24",
        gate: "A02",
        status: "ON TIME",
    },
    {
        time: "04:20",
        destination: "RNO",
        flight: "K5471",
        gate: "C06",
        status: "DELAYED",
    },
    {
        time: "05:32",
        destination: "OAK",
        flight: "CE907",
        gate: "B17",
        status: "ON TIME",
    }
];

const destinations = ["LAX", "SFO", "SAN", "OAK", "SMF", "SNA", "ONT", "BUR", "LGB", "PSP", "FAT"];
const statuses = ["ON TIME", "ON TIME", "DELAYED"];
let hour = 6;

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail]);

            // Append details letter by letter so we can flip independently
            for (const [index, char] of word.entries()) {
                const charElement = document.createElement('div');

                setTimeout(() => {
                    charElement.classList.add('flip');
                    charElement.textContent = char;
                    tableCell.append(charElement);  
                }, 100 * index)

            }

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
}

populateTable();


function genRandomChar(maxChar) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (maxChar) {
        alphabet.slice(0, alphabet.indexOf(maxChar) + 1);
    }

    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function genRandomNum(maxNum) {
    let nums = "0123456789";

    if (maxNum) {
        nums = nums.slice(0, maxNum + 1);
    }

    return nums.charAt(Math.floor(Math.random() * nums.length));
}

function generateTime() {
    hour++;

    if (hour >= 24) {
      hour = 1;
    }
  
   const displayHour = (hour < 10) ? "0" + hour : hour;
   return displayHour +  ":" + genRandomNum(5) + genRandomNum();
}

function generateDest() {
    return destinations[genRandomNum(destinations.length)];
}

function generateFlight() {
    return genRandomChar() + genRandomChar() + genRandomNum() + genRandomNum() + genRandomNum();
}

function generateGate() {
    return genRandomChar("G") + genRandomNum(2) + genRandomNum();
}

function generateStatus() {
    return statuses[genRandomNum(statuses.length)];
}

function shuffleDetails() {
    flights.shift();
    flights.push({
        time: generateTime(),
        dest: generateDest(),
        flight: generateFlight(),
        gate: generateGate(),
        status: generateStatus(),
    });

    tableBody.textContent = "";
    populateTable();

}

setInterval(shuffleDetails, 3000);
