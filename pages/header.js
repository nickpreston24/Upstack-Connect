import Link from 'next/link';

const styles = {
    link: {
        marginRight: "5px",
        padding: "5px",
        border: '1px solid #32dac4',
    }
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={styles.link}>Home</a>
        </Link>
        <Link href="/profile">
            <a style={styles.link}>Profile</a>
        </Link>
        <Link href="/about">
            <a style={styles.link}>About Upstack</a>
        </Link>
        <Link href="/register">
            <a style={styles.link}>Register</a>
        </Link>
    </div>
)

export default Header;
