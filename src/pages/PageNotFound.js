import '../styles/404.css';

function PageNotFound () {
    return (
        <div>
            <h1 className='fourofour'>404</h1>
            <h1 className='page-not-found'>Page Not Found</h1>
            <p className='page-not-found-text'>The page you are looking for does not exist.</p>
        </div>
    );
}

export default PageNotFound;