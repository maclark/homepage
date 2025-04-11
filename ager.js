function func() {
    const startDate = new Date('1986-11-11');
    const currentDate = new Date();

    const diffTime = currentDate - startDate;
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)); // Approximate years, accounting for leap years
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) % 365; // Remaining days after years
    document.getElementById('yearsOld').textContent = diffYears;
    document.getElementById('daysOld').textContent = diffDays;
}