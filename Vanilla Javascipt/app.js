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
        time: "4:20",
        destination: "BUR",
        flight: "F9H24",
        gate: "A2",
        status: "ON TIME",
    },
    {
        time: "1:02",
        destination: "RNO",
        flight: "K5471",
        gate: "C6",
        status: "DELAYED",
    },
    {
        time: "1:57",
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
            const tableCell = document.createElement("td");
            console.log('flightDetail', flightDetail);
        }

        tableBody.append(tableRow);
    }
}

populateTable();
