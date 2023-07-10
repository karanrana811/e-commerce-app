export default function Home(){
    return (
        <>
            <nav>
                <h3>Bookstore</h3>
                <input type='text' placeholder="Search for product"></input>
                <div class='icon'>Wishlist icon</div>
                <div class='icon'>Cart Icon</div>
                <div class='icon'>Signup/Login/Profile Icon</div>
            </nav>
            <img alt='heroImg'/>
            <h4>Featured Book Categories</h4>
            <p>There are many categories of books available at Pustaka. Choose your favorite one now.</p>
            <ul>
                <li>Fiction</li>
                <li>Non-fiction</li>
                <li>Horror</li>
            </ul>
            <footer>
                <div class='footerinfo'><p>Fill your house with stacks of books, in all the crannies and all the nooks.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>© 2023 Bookstore</p></div>
                <div class='footer-social-links'>
                    <p>Connect</p>
                    <p>Github</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
                <div class='footer-resources'>
                    <p>SignUp</p>
                    <p>SignIn</p>
                </div>
            </footer>
        </>
    )
}