/**
 * Calculate the total price of the cart after applying the discount. For regular users discount is 5%, for premium users discount is 10%.
 * Discount cannot exceed 50% of the total price.
 * @param cartTotal total price of the cart
 * @param userType type of user: "guest", "regular", "premium"
 * @param couponCode optional coupon code for additional discount. Examples: "WELCOME10" for 10% off, "BLACKFRIDAY" for 50% off
 */

// case when no discount
// guest user
// regular user
// premium user
// usertype invalid
// welcome10 coupon
// blackfriday coupon
// discount exceeds 50%, cut to 50%
// price is less than 0
// price is 0

export declare function calculateDiscountedTotal(cartTotal: number, userType: string, // "guest", "regular", "premium"
couponCode?: string): number;
