export const registerErrors = (err) => {
    const errors = { username: '', email: '', password: '', };

    if (err.message.includes('username')) {
        if (err.code === 11000) {
            errors.username = 'Username is already taken!';
        } else {
            errors.username = 'Username is not valid and must be 3-55 characters long!';
        }

        // Object.keys(err.keyValue)[0].includes('username)
    }

    if (err.message.includes('email')) {
        if (err.code === 11000) {
            errors.email = 'Email is already taken!';
        } else {
            errors.email = 'Email is invalid and must be in URL format!';
        }
    }

    if (err.message.includes('password')) {
        errors.password = 'Password is invalid and must be at least 6 characters long!';
    }

    return errors;
};

export const loginErrors = (err) => {
    const errors = { email: '', password: '', };

    if (err.message.includes('email')) {
        errors.email = 'The given email is not valid!';
    }

    if (err.message.includes('password')) {
        errors.password = 'The given password is not valid!';
    }

    return errors;
};