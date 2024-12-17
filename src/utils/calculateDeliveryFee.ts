interface DeliveryFeeInput {
    cartValue: number;
    deliveryDistance: number;
    amountOfItems: number;
    date: string;
}

export const calculateDeliveryFee = ({cartValue, deliveryDistance, amountOfItems, date }: DeliveryFeeInput): number => {
    let totalDeliveryFee = 0;

    // 1. Cart Value < 10€ surcharge
    if (cartValue < 10) {
        totalDeliveryFee += 10 - cartValue;             // surcharge is the difference between 10€ and cart value
    }

    // 2. Delivery distance calculation
    let distanceFee = 2;                            // Base fee for the first 1000 meters
    if (deliveryDistance > 1000) {
        const extraDistance = deliveryDistance - 1000;
        const additionalFees = Math.ceil(extraDistance / 500);
        distanceFee += additionalFees;                  // 1€ for every additional 500 meters
    }
    totalDeliveryFee += distanceFee;

    // 3. Amount of items surcharge
    if (amountOfItems >= 5) {
        totalDeliveryFee += (amountOfItems - 5) * 0.5; // surcharge for each item above 5
    }

    // 4. Free delivery for cart value >= 100€
    if (cartValue >= 100) {
        totalDeliveryFee = 0; // Free delivery
    }

    // 5. Friday rush hour multiplier (3-7 PM )
    const orderTime = new Date(date);
    const isFridayRush = orderTime.getDay() === 5 && orderTime.getUTCHours() >= 15 && orderTime.getUTCHours() <= 19; // Check for Friday 3-7 PM UTC
    if (isFridayRush) {
        totalDeliveryFee *= 1.1; // Apply 10% rush hour multiplier
    }

    // 6. Cap the fee at 15€
    if (totalDeliveryFee > 15) {
        totalDeliveryFee = 15;
    }

    return totalDeliveryFee;
};
