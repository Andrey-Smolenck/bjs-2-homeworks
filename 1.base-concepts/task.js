function solveEquation(coefficientA, coefficientB, coefficientC) {
    let roots = [];
    const discriminant = coefficientB ** 2 - 4 * coefficientA * coefficientC;

    if (discriminant === 0) {
        roots.push(-coefficientB / (2 * coefficientA));
    } else if (discriminant > 0) {
        roots.push((-coefficientB + Math.sqrt(discriminant)) / (2 * coefficientA));
        roots.push((-coefficientB - Math.sqrt(discriminant)) / (2 * coefficientA));
    }

    return roots;
}

function calculateTotalMortgage(annualPercent, contribution, totalCost, durationMonths) {
    let monthlyRate = (annualPercent / 100) / 12;
    let loanBody = totalCost - contribution;
    let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, durationMonths) - 1)));
    let totalAmount = monthlyPayment * durationMonths;

    return Number(totalAmount.toFixed(2));
}