const dailyContributions=[]

document.getElementById("submitBtn").addEventListener("click", function() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    // const mySalary = parseFloat(document.getElementById("mySalary").value);

    // Define the salary ratios
    const totalSalary = 136000
    
    const abadullah = parseFloat(38000/totalSalary) * totalAmount;
    const nadir = parseFloat(60000/totalSalary) * totalAmount;
    const yasir = parseFloat(38000/totalSalary) * totalAmount;

    document.getElementById("nadir").innerText = nadir.toFixed(2);
    document.getElementById("abadullah").innerText = abadullah.toFixed(2);
    document.getElementById("yasir").innerText = yasir.toFixed(2);

    const date = new Date().toLocaleDateString();
    dailyContributions.push({
        date: date,
        nadir: nadir.toFixed(2),
        abadullah: abadullah.toFixed(2),
        yasir: yasir.toFixed(2),
    });

    document.getElementById("results").style.display = "block";
    document.getElementById("totalContributions").style.display = "none";
    document.getElementById("individualContributions").style.display = "none";
});

document.getElementById("showContributionsBtn").addEventListener("click", function() {
    document.getElementById("individualContributions").style.display = "block";
    const contributionCards = document.getElementById("contributionCards");
    contributionCards.innerHTML = ''; // Clear previous cards

    // Calculate total contributions and create cards
    let nadirTotal = 0, abadTotal = 0, yasirTotal = 0;

    dailyContributions.forEach(contribution => {
        nadirTotal += parseFloat(contribution.nadir);
        abadTotal += parseFloat(contribution.abadullah);
        yasirTotal += parseFloat(contribution.yasir);

        contributionCards.innerHTML += `
            <div class="card">
                <h3>Date: ${contribution.date}</h3>
                <p>Nadir's Contribution: ${contribution.nadir}</p>
                <p>Abadullah's Contribution: ${contribution.abadullah}</p>
                <p>Yasir's Contribution: ${contribution.yasir}</p>
            </div>
        `;
    });
});

document.getElementById("showTotalContributionsBtn").addEventListener("click", function() {
    document.getElementById("individualContributions").style.display = "none";
    document.getElementById("totalContributions").style.display = "block";
    document.getElementById("results").style.display = "none";
    
    const totalCards = document.getElementById("totalCards");
    totalCards.innerHTML = '';

    let nadirTotal = 0, abadTotal = 0, yasirTotal = 0;

    dailyContributions.forEach(contribution => {
        nadirTotal += parseFloat(contribution.nadir);
        abadTotal += parseFloat(contribution.abadullah);
        yasirTotal += parseFloat(contribution.yasir);
    });

    totalCards.innerHTML += `
        <div class="total-card">
            <h3>Total Contributions</h3>
            <p>Nadir's Total: ${nadirTotal.toFixed(2)}</p>
            <p>Abad's Total: ${abadTotal.toFixed(2)}</p>
            <p>Yasir's Total: ${yasirTotal.toFixed(2)}</p>
        </div>
    `;
});

document.getElementById("backToIndividualBtn").addEventListener("click", function() {
document.getElementById("totalContributions").style.display = "none";
document.getElementById("individualContributions").style.display = "block";
});