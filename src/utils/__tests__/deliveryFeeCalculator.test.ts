import { calculateDeliveryFee } from '../calculateDeliveryFee';

describe('calculateDeliveryFee', () => {
  test('Cart value less than 10€ adds surcharge', () => {
    const input = { cartValue: 8, deliveryDistance: 500, amountOfItems: 2, date: '2024-12-17T14:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBe(4);
  });

  test('Cart value > 10€, no surcharge', () => {
    const input = { cartValue: 15, deliveryDistance: 1500, amountOfItems: 6, date: '2024-12-17T14:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBe(3.5);
  });

  test('Free delivery when cart value is >= 100€', () => {
    const input = { cartValue: 100, deliveryDistance: 2000, amountOfItems: 3, date: '2024-12-17T14:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBe(0);
  });

  test('Rush hour multiplier applies on Friday 3-7 PM UTC', () => {
    const input = { cartValue: 20, deliveryDistance: 1000, amountOfItems: 4, date: '2024-12-20T16:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBeCloseTo(2.2); // 10% increase on 2€
  });

  test('Maximum delivery fee is capped at 15€', () => {
    const input = { cartValue: 5, deliveryDistance: 3000, amountOfItems: 10, date: '2024-12-20T16:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBe(15);
  });

  test('Exact rush hour boundary (3 PM UTC on Friday)', () => {
    const input = { cartValue: 25, deliveryDistance: 1200, amountOfItems: 4, date: '2024-12-20T15:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBeCloseTo(3.3); // Includes 10% increase
  });

  test('Cart value 9.99€ surcharge test', () => {
    const input = { cartValue: 9.99, deliveryDistance: 0, amountOfItems: 0, date: '2024-12-17T10:00:00' };
    const result = calculateDeliveryFee(input);
    expect(result).toBe(0.01);
  });
});
