/**
 * Validate user signup
 * @param username must be 3-15 alphanumeric characters
 * @param email must contain '@' and '.'
 * @param password must be 8-20 characters and contain a number
 * @param age must be 18-99
 */

// case when all inputs are valid = signup successful
// short username
// long username
// email without @
// email without .
// short password
// long password
// password without number
// age < 18
// age > 99
export declare function validateUserSignup(username: string, email: string, password: string, age: number): string;
