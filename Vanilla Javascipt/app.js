const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "11:44",
        destination: "LAX",
        flight: "J7683",
        gate: "A12",
        status: "ON TIME",
    },
    {
        time: "09:17",
        destination: "SFO",
        flight: "GN231",
        gate: "B3",
        status: "DELAYED",
    },
    {
        time: "04:20",
        destination: "BUR",
        flight: "F9H24",
        gate: "A2",
        status: "ON TIME",
    },
    {
        time: "02:06",
        destination: "RNO",
        flight: "K5471",
        gate: "C6",
        status: "DELAYED",
    },
    {
        time: "01:53",
        destination: "OAK",
        flight: "CE907",
        gate: "B1",
        status: "ON TIME",
    }
];

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail]);

            // Append details letter by letter so we can flip independently
            for (const char of word) {
                const charElement = document.createElement('div');
                charElement.classList.add('flip');
                charElement.textContent = char;
                tableCell.append(charElement);
            }

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
}

populateTable();
