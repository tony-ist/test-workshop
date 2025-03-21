/**
 * Calculate the total price of the cart after applying the discount
 * @param cartTotal total price of the cart
 * @param userType type of user: "guest", "regular", "premium"
 * @param couponCode optional coupon code for additional discount. Examples: "WELCOME10", "BLACKFRIDAY"
 */
export declare function calculateDiscountedTotal(cartTotal: number, userType: string, // "guest", "regular", "premium"
couponCode?: string): number;
