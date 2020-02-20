export default {
    template: `
    <section class="formPage">
        <!-- this is the sign up form -->
        <div class="signup">
            <h2>SIGN UP</h2>
            <form action="" method="">

                <input type="text" name="firstName" id="firstName" value="" placeholder='First Name'>

                <input type="text" name="lastName" id="lastName" value="" placeholder='Last Name'>

                <input type="password" name="password" id="userPassword" value="" placeholder='Password'>

                <input type="email" name="email" id="userEmail" value="" placeholder='Email'>

                <input type="text" name="country" id="userCountry" value="" placeholder='Country'>

                <button name="submit">SIGN UP NOW</button>
            </form>
        </div>

        <!-- this is the login form -->
        <div class="login">
            <h2>LOGIN</h2>
            <form action="" method="">
            

                <input type="text" name="email" id="email" value="" placeholder='Email'>

                <input type="password" name="password" id="password" value="" placeholder='Password'>

                <button name="login">LOGIN</button>
            </form>
        </div>
    </section>
    `,

    created: function() {
        console.log("Sign Up Page Rendered");
    }
}