import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mb-5 border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;